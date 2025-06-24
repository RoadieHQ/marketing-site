#!/bin/bash

set -e

# Download OpenAPI docs
curl -v https://api.roadie.so/api/scaffolder/api-docs -H "Authorization: Bearer $ROADIE_API_TOKEN" > static/scaffolder-openapi.json
curl -v https://api.roadie.so/api/catalog/api-docs -H "Authorization: Bearer $ROADIE_API_TOKEN" > static/catalog-openapi.json
curl -v https://api.roadie.so/api/tech-insights/v1/api-docs -H "Authorization: Bearer $ROADIE_API_TOKEN" > static/tech-insights-openapi.json

download_roadie_local_cli() {
  local VERSION=$1
  local DEST_DIR="static/downloads/roadie-local/${VERSION}"
  local BASE_URL="https://github.com/RoadieHQ/roadie-local/releases/download/cli-${VERSION}"

  FILES=(
    "roadie-local-cli-${VERSION}-darwin-amd64"
    "roadie-local-cli-${VERSION}-darwin-arm64"
    "roadie-local-cli-${VERSION}-linux-amd64"
    "roadie-local-cli-${VERSION}-linux-arm64"
  )

  mkdir -p "${DEST_DIR}"

  for FILE in "${FILES[@]}"; do
    echo "Downloading ${FILE}..."
    curl -H "Authorization: token ${GITHUB_TOKEN}" -L -o "${DEST_DIR}/${FILE}" "${BASE_URL}/${FILE}"
  done
}

# Loop over versions
VERSIONS=("v0.1.1")
for VERSION in "${VERSIONS[@]}"; do
  download_roadie_local_cli "${VERSION}"
done