import { useCallback } from 'react';
import { navigate } from 'gatsby';
import isEmpty from 'lodash/isEmpty';

/**
 * Custom hook to manage filter state synchronized with URL search params
 *
 * @param {Object} options
 * @param {Object} options.location - Gatsby location object
 * @param {Function} options.setState - State setter function
 * @param {string} options.paramName - URL search parameter name
 * @param {Function} options.shouldDelete - Function to determine if param should be deleted
 * @param {Function} options.getParamValue - Function to get the value to set in URL
 * @returns {Function} Handler function to update both state and URL
 */
const useUrlFilterState = ({ location, setState, paramName, shouldDelete, getParamValue }) => {
  return useCallback((newValue) => {
    setState(newValue);

    const params = new URLSearchParams(location.search);

    if (shouldDelete(newValue)) {
      params.delete(paramName);
    } else {
      params.set(paramName, getParamValue(newValue));
    }

    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  }, [location, setState, paramName, shouldDelete, getParamValue]);
};

/**
 * Preset for handling category filters (objects with searchParam property)
 */
export const useCategoryFilter = (location, setCategory) => {
  return useUrlFilterState({
    location,
    setState: setCategory,
    paramName: 'category',
    shouldDelete: (value) => isEmpty(value),
    getParamValue: (value) => value.searchParam,
  });
};

/**
 * Preset for handling text query filters
 */
export const useQueryFilter = (location, setQuery) => {
  return useUrlFilterState({
    location,
    setState: setQuery,
    paramName: 'q',
    shouldDelete: (value) => !value || value.trim() === '',
    getParamValue: (value) => value,
  });
};

/**
 * Preset for handling availability filters (with 'all' as default)
 */
export const useAvailabilityFilter = (location, setAvailabilityFilter) => {
  return useUrlFilterState({
    location,
    setState: setAvailabilityFilter,
    paramName: 'availability',
    shouldDelete: (value) => value.value === 'all',
    getParamValue: (value) => value.value,
  });
};

export default useUrlFilterState;
