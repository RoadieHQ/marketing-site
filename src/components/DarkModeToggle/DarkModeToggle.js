import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import useDarkMode from '../../hooks/useDarkMode';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode, mounted } = useDarkMode();

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <SunIcon className="h-6 w-6" aria-hidden="true" />
      ) : (
        <MoonIcon className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
};

export default DarkModeToggle;
