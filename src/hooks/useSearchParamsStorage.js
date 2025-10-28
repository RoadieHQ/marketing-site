import { useEffect, useState } from 'react';

/**
 * Custom hook to save search params to sessionStorage
 * @param {string} storageKey - The sessionStorage key to use
 * @param {string} searchParams - The search params string to save
 */
export const useSaveSearchParams = (storageKey, searchParams) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(storageKey, searchParams);
    }
  }, [storageKey, searchParams]);
};

/**
 * Custom hook to restore search params from sessionStorage and build a back link
 * @param {string} storageKey - The sessionStorage key to read from
 * @param {string} basePath - The base path for the back link
 * @returns {string} The back link with restored search params
 */
export const useBackLinkWithSearchParams = (storageKey, basePath) => {
  const [backLink, setBackLink] = useState(basePath);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedSearchParams = sessionStorage.getItem(storageKey);
      if (savedSearchParams) {
        setBackLink(`${basePath}${savedSearchParams}`);
      }
    }
  }, [storageKey, basePath]);

  return backLink;
};
