// Data structure version - increment when making breaking changes to blob storage structure
export const DATA_VERSION = 'v2';

// V2 keys support both npm and terraform registries with unified data structure
export const ALL_PACKAGE_NAMES_STORE_KEY = `all-backstage-plugin-package-names-${DATA_VERSION}`;
export const ALL_PACKAGE_DATA_STORE_KEY = `all-backstage-plugin-package-data-${DATA_VERSION}`;

// Helper to create versioned package key
export const getVersionedPackageKey = (packageName) => `${packageName}-${DATA_VERSION}`;
