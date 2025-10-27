/**
 * @jest-environment jsdom
 */

import { renderHook, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import useDarkMode from './useDarkMode';

describe('useDarkMode', () => {
  let mockMediaQueryList;
  let mediaQueryListeners;

  beforeEach(() => {
    // Reset localStorage
    localStorage.clear();
    
    // Reset document classes
    document.documentElement.classList.remove('dark');
    
    // Setup media query mock
    mediaQueryListeners = [];
    mockMediaQueryList = {
      matches: false,
      addEventListener: jest.fn((event, handler) => {
        mediaQueryListeners.push(handler);
      }),
      removeEventListener: jest.fn((event, handler) => {
        mediaQueryListeners = mediaQueryListeners.filter(l => l !== handler);
      }),
    };
    
    window.matchMedia = jest.fn(() => mockMediaQueryList);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should initialize with light mode when no saved preference and system prefers light', () => {
    mockMediaQueryList.matches = false;
    
    const { result } = renderHook(() => useDarkMode());
    
    act(() => {
      // Trigger mount
    });
    
    expect(result.current.isDarkMode).toBe(false);
    expect(result.current.mounted).toBe(true);
  });

  it('should initialize with dark mode when system prefers dark and no saved preference', () => {
    mockMediaQueryList.matches = true;
    
    const { result } = renderHook(() => useDarkMode());
    
    act(() => {
      // Trigger mount
    });
    
    expect(result.current.isDarkMode).toBe(true);
  });

  it('should use saved preference over system preference', () => {
    mockMediaQueryList.matches = true; // System prefers dark
    localStorage.setItem('theme', 'light'); // But user prefers light
    
    const { result } = renderHook(() => useDarkMode());
    
    act(() => {
      // Trigger mount
    });
    
    expect(result.current.isDarkMode).toBe(false);
  });

  it('should toggle dark mode', () => {
    const { result } = renderHook(() => useDarkMode());
    
    act(() => {
      result.current.toggleDarkMode();
    });
    
    expect(result.current.isDarkMode).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    act(() => {
      result.current.toggleDarkMode();
    });
    
    expect(result.current.isDarkMode).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should add/remove dark class on document element', () => {
    const { result } = renderHook(() => useDarkMode());
    
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    
    act(() => {
      result.current.toggleDarkMode();
    });
    
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should save preference to localStorage', () => {
    const { result } = renderHook(() => useDarkMode());
    
    act(() => {
      result.current.toggleDarkMode();
    });
    
    expect(localStorage.getItem('theme')).toBe('dark');
    
    act(() => {
      result.current.toggleDarkMode();
    });
    
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
