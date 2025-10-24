// Shared utilities for fetching package data from registries with rate limiting and retry logic

// Rate limiting configuration
export const MAX_CONCURRENT_REQUESTS = 10;
export const RETRY_ATTEMPTS = 3;
export const RETRY_DELAY_MS = 1000;

/**
 * Fetch with retry logic and exponential backoff
 * @param {string} url - URL to fetch
 * @param {number} attempts - Number of retry attempts
 * @returns {Promise<Response>} Fetch response
 */
export const fetchWithRetry = async (url, attempts = RETRY_ATTEMPTS) => {
  for (let i = 0; i < attempts; i++) {
    try {
      const response = await fetch(url);

      // If rate limited (429) or server error (5xx), retry
      if (response.status === 429 || response.status >= 500) {
        if (i < attempts - 1) {
          const delay = RETRY_DELAY_MS * Math.pow(2, i); // Exponential backoff
          console.log(
            `Rate limited or error for ${url}, retrying in ${delay}ms (attempt ${
              i + 1
            }/${attempts})`
          );
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }
      }

      return response;
    } catch (error) {
      if (i < attempts - 1) {
        const delay = RETRY_DELAY_MS * Math.pow(2, i);
        console.log(
          `Network error for ${url}, retrying in ${delay}ms (attempt ${i + 1}/${attempts}):`,
          error.message
        );
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        console.error(`Failed to fetch ${url} after ${attempts} attempts:`, error.message);
        throw error;
      }
    }
  }
};

/**
 * Rate-limited Promise.all that processes promises in batches
 * @param {Array} items - Items to process
 * @param {Function} fn - Async function to apply to each item
 * @param {number} concurrency - Max number of concurrent operations
 * @returns {Promise<Array>} Results array
 */
export const promiseAllWithConcurrency = async (items, fn, concurrency = MAX_CONCURRENT_REQUESTS) => {
  const results = [];
  const executing = [];

  for (const [index, item] of items.entries()) {
    const promise = fn(item, index).then((result) => {
      executing.splice(executing.indexOf(promise), 1);
      return result;
    });

    results.push(promise);
    executing.push(promise);

    if (executing.length >= concurrency) {
      await Promise.race(executing);
    }
  }

  return Promise.all(results);
};
