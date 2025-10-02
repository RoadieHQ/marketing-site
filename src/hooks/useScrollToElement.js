import { useState, useEffect, useCallback } from 'react';

const useScrollToElement = (elementId, options = {}) => {
  const {
    threshold = 0.5, // How much of the element should be visible (0-1)
    once = true, // Only trigger once
  } = options;

  const [hasScrolledTo, setHasScrolledTo] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    if (once && hasScrolledTo) return;

    const element = document.getElementById(elementId);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if element is in viewport
    const isInViewport =
      rect.top <= windowHeight * (1 - threshold) && rect.bottom >= windowHeight * threshold;

    if (isInViewport && !hasScrolledTo) {
      setHasScrolledTo(true);
      setIsVisible(true);
    }
  }, [elementId, threshold, once, hasScrolledTo]);

  useEffect(() => {
    // Check on mount
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { hasScrolledTo, isVisible };
};

export default useScrollToElement;
