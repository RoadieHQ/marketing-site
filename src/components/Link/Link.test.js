/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react';
import { createMemorySource, createHistory, LocationProvider } from '@reach/router';

import Link from './Link';

describe('Link', () => {
  const route = '/';
  const source = createMemorySource(route);
  const history = createHistory(source);

  test('Link should return a link for links starting with a slash', async () => {
    render(
      <LocationProvider history={history}>
        <Link to="/">Hello</Link>
      </LocationProvider>
    );
    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });

  test('Link should return a link for links starting with a hash', async () => {
    render(
      <LocationProvider history={history}>
        <Link to="#other-element">Hello</Link>
      </LocationProvider>
    );

    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/#other-element');
  });

  test('Link should return a link for external links', async () => {
    render(
      <LocationProvider history={history}>
        <Link to="https://example.com">Hello</Link>
      </LocationProvider>
    );

    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  test('Link should add target=_blank to external links', async () => {
    render(
      <LocationProvider history={history}>
        <Link to="https://example.com">Hello</Link>
      </LocationProvider>
    );

    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
  });

  test('Link should add privacy rel to external links', async () => {
    render(
      <LocationProvider history={history}>
        <Link to="https://example.com">Hello</Link>
      </LocationProvider>
    );

    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('Link should force internal links to end with a slash', async () => {
    render(
      <LocationProvider history={history}>
        <Link to="/blog/post">Hello</Link>
      </LocationProvider>
    );

    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/blog/post/');
  });

  test('Link should force internal links with a hash to end with a slash', async () => {
    render(
      <LocationProvider history={history}>
        <Link to="/blog/post#content-id">Hello</Link>
      </LocationProvider>
    );

    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/blog/post/#content-id');
  });

});
