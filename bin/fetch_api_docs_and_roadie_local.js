const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');
const { promisify } = require('util');
const streamPipeline = promisify(pipeline);
const semver = require('semver');

const ROADIE_API_TOKEN = process.env.ROADIE_API_TOKEN;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!ROADIE_API_TOKEN || !GITHUB_TOKEN) {
  console.error('Missing ROADIE_API_TOKEN or GITHUB_TOKEN');
  process.exit(1);
}

async function downloadOpenApiDocs() {
  const endpoints = [
    {
      url: 'https://api.roadie.so/api/scaffolder/api-docs',
      file: 'static/scaffolder-openapi.json',
    },
    { url: 'https://api.roadie.so/api/catalog/api-docs', file: 'static/catalog-openapi.json' },
    {
      url: 'https://api.roadie.so/api/tech-insights/v1/api-docs',
      file: 'static/tech-insights-openapi.json',
    },
  ];

  for (const { url, file } of endpoints) {
    try {
      console.log(`Downloading ${url}...`);
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${ROADIE_API_TOKEN}` },
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      fs.writeFileSync(file, JSON.stringify(data, null, 2));
      console.log(`Saved to ${file}`);
    } catch (err) {
      console.error(`Error downloading ${url}: ${err.message}`);
      process.exit(1);
    }
  }
}

async function downloadRoadieLocalBuilds() {
  const destDir = path.join('static', 'downloads', 'roadie-local');
  fs.mkdirSync(destDir, { recursive: true });

  console.log('Fetching release build URLs...');
  try {
    const res = await fetch('https://api.github.com/repos/RoadieHQ/roadie-local/releases', {
      headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText}`);
    }

    const releases = await res.json();
    const buildIndex = {};

    const assets = releases
      .filter((release) => release.name.startsWith('cli-v'))
      .sort((a, b) => semver.rcompare(a.name.replace('cli-v', ''), b.name.replace('cli-v', '')))
      .map((release) => {
        buildIndex[release.name] = [];
        return release.assets.map((asset) => ({ ...asset, releaseName: release.name }));
      })
      .flat();

    for (const { name: fileName, url, releaseName } of assets) {
      if (fileName.endsWith('.gz')) {
        continue;
      }

      const filePath = path.join(destDir, fileName);

      console.log(`Downloading ${fileName} from ${url}...`);
      const fileRes = await fetch(url, {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/octet-stream',
        },
        redirect: 'follow',
      });

      if (!fileRes.ok) {
        console.error(`Error: Unexpected status code ${fileRes.status} for ${url}`);
        process.exit(1);
      }

      const writeStream = fs.createWriteStream(filePath);
      await streamPipeline(fileRes.body, writeStream);

      if (fs.statSync(filePath).size === 0) {
        console.error(`Error: Downloaded file ${fileName} is empty or missing.`);
        process.exit(1);
      }

      buildIndex[releaseName].push(fileName);
      console.log(`Saved ${fileName}`);
    }

    if (assets.length > 0) {
      const latestRelease = assets[0].releaseName;
      const latestFiles = buildIndex[latestRelease];
      const latestFileNames = [];

      const versionRegex = new RegExp(latestRelease.replace(/^cli-/, ''));

      for (const fileName of latestFiles) {
        const srcPath = path.join(destDir, fileName);
        const latestFileName = fileName.replace(versionRegex, 'latest');
        const destPath = path.join(destDir, latestFileName);

        fs.copyFileSync(srcPath, destPath);
        latestFileNames.push(latestFileName);
        console.log(`Created ${latestFileName} for ${fileName}`);
      }
      buildIndex['latest'] = latestFileNames;
    }

    const indexPath = path.join(destDir, 'index.json');
    fs.writeFileSync(indexPath, JSON.stringify(buildIndex, null, 2));
    console.log(`Index file written to ${indexPath}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

async function downloadRoadieLocalDockerFiles() {
  const destDir = path.join('static', 'downloads', 'roadie-local-docker-compose');
  fs.mkdirSync(destDir, { recursive: true });

  console.log('Fetching release build URLs...');
  try {
    const res = await fetch('https://api.github.com/repos/RoadieHQ/roadie-local/releases', {
      headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText}`);
    }

    const releases = await res.json();
    const buildIndex = {};

    const assets = releases
      .filter((release) => release.name.startsWith('docker-compose-v'))
      .sort((a, b) =>
        semver.rcompare(
          a.name.replace('docker-compose-v', ''),
          b.name.replace('docker-compose-v', '')
        )
      )
      .map((release) => {
        const asts = release.assets.map((asset) => ({ ...asset, releaseName: release.name }));
        if (asts.length !== 0) {
          buildIndex[release.name] = [];
        }
        return asts;
      })
      .flat();

    for (const { name: fileName, url, releaseName } of assets) {
      if (!fileName.match(new RegExp(`^docker-compose-v.*.yaml$`))) {
        continue;
      }

      const filePath = path.join(destDir, fileName);

      console.log(`Downloading ${fileName} from ${url}...`);
      const fileRes = await fetch(url, {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/octet-stream',
        },
        redirect: 'follow',
      });

      if (!fileRes.ok) {
        console.error(`Error: Unexpected status code ${fileRes.status} for ${url}`);
        process.exit(1);
      }

      const writeStream = fs.createWriteStream(filePath);
      await streamPipeline(fileRes.body, writeStream);

      if (fs.statSync(filePath).size === 0) {
        console.error(`Error: Downloaded file ${fileName} is empty or missing.`);
        process.exit(1);
      }

      buildIndex[releaseName].push(fileName);
      console.log(`Saved ${fileName}`);
    }

    if (assets.length > 0) {
      const latestRelease = assets[0].releaseName;
      const latestFiles = buildIndex[latestRelease];
      const latestFileNames = [];

      for (const fileName of latestFiles) {
        const srcPath = path.join(destDir, fileName);
        const latestFileName = 'docker-compose-latest.yaml';
        const destPath = path.join(destDir, latestFileName);

        fs.copyFileSync(srcPath, destPath);
        latestFileNames.push(latestFileName);
        console.log(`Created ${latestFileName} for ${fileName}`);
      }
      buildIndex['latest'] = latestFileNames;
    }

    const indexPath = path.join(destDir, 'index.json');
    fs.writeFileSync(indexPath, JSON.stringify(buildIndex, null, 2));
    console.log(`Index file written to ${indexPath}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

// Run the tasks
(async () => {
  await downloadOpenApiDocs();
  await downloadRoadieLocalDockerFiles();
  // await downloadRoadieLocalBuilds();
})();
