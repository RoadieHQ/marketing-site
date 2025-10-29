/**
 * @jest-environment jsdom
 */

import React from 'react';
import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemorySource, createHistory, LocationProvider } from '@reach/router';

// Mock TextLink to avoid module resolution issues with 'components' alias
jest.mock('../TextLink', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: ({ children, to, ...props }) => (
      <a href={to} {...props}>
        {children}
      </a>
    ),
  };
});

import SidebarItem from './Item';

describe('SidebarItem', () => {
  const route = '/';

  describe('when external is false or not provided', () => {
    it('renders a link without target or rel attributes', () => {
      const source = createMemorySource(route);
      const history = createHistory(source);

      render(
        <LocationProvider history={history}>
          <SidebarItem text="Internal Link" to="/docs/page/" />
        </LocationProvider>
      );

      const link = screen.getByRole('link');
      expect(link).toHaveTextContent('Internal Link');
      expect(link).not.toHaveAttribute('target');
      expect(link).not.toHaveAttribute('rel');
    });

    it('does not render an external link icon', () => {
      const source = createMemorySource(route);
      const history = createHistory(source);

      const { container } = render(
        <LocationProvider history={history}>
          <SidebarItem text="Internal Link" to="/docs/page/" />
        </LocationProvider>
      );

      // ExternalLinkIcon should not be present
      const icon = container.querySelector('svg');
      expect(icon).not.toBeInTheDocument();
    });
  });

  describe('when external is true', () => {
    it('renders a link with target="_blank" and rel attributes', () => {
      const source = createMemorySource(route);
      const history = createHistory(source);

      render(
        <LocationProvider history={history}>
          <SidebarItem text="External Link" to="/docs/page/" external={true} />
        </LocationProvider>
      );

      const link = screen.getByRole('link');
      expect(link).toHaveTextContent('External Link');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('renders an external link icon', () => {
      const source = createMemorySource(route);
      const history = createHistory(source);

      const { container } = render(
        <LocationProvider history={history}>
          <SidebarItem text="External Link" to="/docs/page/" external={true} />
        </LocationProvider>
      );

      // ExternalLinkIcon should be present
      const icon = container.querySelector('svg');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass('h-3', 'w-3');
    });
  });

  describe('className prop', () => {
    it('applies additional className to the link', () => {
      const source = createMemorySource(route);
      const history = createHistory(source);

      render(
        <LocationProvider history={history}>
          <SidebarItem text="Link" to="/docs/page/" className="pl-10" />
        </LocationProvider>
      );

      const link = screen.getByRole('link');
      expect(link).toHaveClass('pl-10');
    });
  });
});
