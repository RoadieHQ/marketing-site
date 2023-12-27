#!/bin/bash

set -e

curl -v https://api.roadie.so/api/scaffolder/api-docs -H "Authorization: Bearer $ROADIE_API_TOKEN" > static/scaffolder-openapi.json
curl -v https://api.roadie.so/api/catalog/api-docs -H "Authorization: Bearer $ROADIE_API_TOKEN" > static/catalog-openapi.json
curl -v https://api.roadie.so/api/tech-insights/v1/api-docs -H "Authorization: Bearer $ROADIE_API_TOKEN" > static/tech-insights-openapi.json
