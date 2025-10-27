import stripTerraformData from './stripTerraformData.mjs';
import {
  fetchWithRetry,
  promiseAllWithConcurrency,
  MAX_CONCURRENT_REQUESTS
} from './fetchUtils.mjs';

const TERRAFORM_REGISTRY_API = 'https://registry.terraform.io/v1/providers';

/**
 * Fetch Terraform provider data from the Terraform Registry
 * @param {string} packageName - Provider name in format "namespace/name"
 * @returns {Promise<Object>} Provider data
 */
const fetchTerraformProvider = async (packageName) => {
  // Terraform package names are typically in format "namespace/name"
  // e.g., "hashicorp/aws" or "terraform-providers/aws"
  const parts = packageName.split('/');
  if (parts.length !== 2) {
    throw new Error(`Invalid Terraform provider name: ${packageName}. Expected format: namespace/name`);
  }

  const [namespace, name] = parts;
  const url = `${TERRAFORM_REGISTRY_API}/${namespace}/${name}`;

  try {
    const response = await fetchWithRetry(url);

    if (!response.ok) {
      console.error(
        `Failed to fetch Terraform provider ${packageName}: ${response.status} ${response.statusText}`
      );
      return { packageName, error: `HTTP ${response.status}`, data: null };
    }

    const data = await response.json();
    return { packageName, error: null, data };
  } catch (error) {
    console.error(`Error fetching Terraform provider ${packageName}:`, error.message);
    return { packageName, error: error.message, data: null };
  }
};

/**
 * Fetch multiple Terraform providers with rate limiting
 * @param {Array<string>} packageNames - Array of provider names
 * @returns {Promise<Array>} Array of results with stripped data
 */
export const fetchMultipleTerraformProviders = async (packageNames) => {
  console.log(
    `Fetching Terraform provider data for ${packageNames.length} providers with concurrency limit of ${MAX_CONCURRENT_REQUESTS}...`
  );

  const results = await promiseAllWithConcurrency(packageNames, fetchTerraformProvider);

  // Filter successful results and strip data
  const successfulResults = results
    .filter((result) => result.data !== null)
    .map((result) => stripTerraformData(result.data, result.packageName));

  const failedPackages = results.filter((result) => result.data === null);
  if (failedPackages.length > 0) {
    console.warn(
      `Failed to fetch ${failedPackages.length} Terraform providers:`,
      failedPackages.map((r) => r.packageName)
    );
  }

  return successfulResults;
};

export default fetchTerraformProvider;
