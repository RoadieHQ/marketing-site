/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { createMemorySource, createHistory, LocationProvider } from '@reach/router';

import Link from './Link';

describe('Link', () => {
  test('returns a link for links starting with a slash', async () => {
    const route = '/';
    const source = createMemorySource(route);
    const history = createHistory(source);

    render(
      <LocationProvider history={history}>
        <Link to="/">Hello</Link>
      </LocationProvider>
    );
    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });

  test('returns a link for links starting with a hash', async () => {
    const route = '/';
    const source = createMemorySource(route);
    const history = createHistory(source);

    render(
      <LocationProvider history={history}>
        <Link to="#other-element">Hello</Link>
      </LocationProvider>
    );

    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/#other-element');
  });

  test('returns a link for external links', async () => {
    const route = '/';
    const source = createMemorySource(route);
    const history = createHistory(source);

    render(
      <LocationProvider history={history}>
        <Link to="https://example.com">Hello</Link>
      </LocationProvider>
    );

    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  test('adds target=_blank to external links', async () => {
    const route = '/';
    const source = createMemorySource(route);
    const history = createHistory(source);

    render(
      <LocationProvider history={history}>
        <Link to="https://example.com">Hello</Link>
      </LocationProvider>
    );

    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
  });

  test('adds privacy rel to external links', async () => {
    const route = '/';
    const source = createMemorySource(route);
    const history = createHistory(source);

    render(
      <LocationProvider history={history}>
        <Link to="https://example.com">Hello</Link>
      </LocationProvider>
    );

    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('forces internal links to end with a slash', async () => {
    const route = '/';
    const source = createMemorySource(route);
    const history = createHistory(source);

    render(
      <LocationProvider history={history}>
        <Link to="/blog/post">Hello</Link>
      </LocationProvider>
    );

    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/blog/post/');
  });

  test('forces internal links with a hash to end with a slash', async () => {
    const route = '/';
    const source = createMemorySource(route);
    const history = createHistory(source);

    render(
      <LocationProvider history={history}>
        <Link to="/blog/post#content-id">Hello</Link>
      </LocationProvider>
    );

    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/blog/post/#content-id');
  });

  test('adds the referring pathname when navigating to free-trial', async () => {
    const route = '/';
    const source = createMemorySource(route);
    const history = createHistory(source);

    render(
      <LocationProvider history={history}>
        <Link to="/free-trial/">Hello</Link>
      </LocationProvider>
    );

    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/free-trial/?referringPathname=homepage');
  });

  test('adds the referring pathname when navigating to request-demo', async () => {
    const route = '/blog/page-one/';
    const source = createMemorySource(route);
    const history = createHistory(source);

    render(
      <LocationProvider history={history}>
        <Link to="/request-demo/">Hello</Link>
      </LocationProvider>
    );

    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/request-demo/?referringPathname=blog-page-one');
  });

  test('appends to existing query params when adding referring pathname', async () => {
    const route = '/';
    const source = createMemorySource(route);
    const history = createHistory(source);

    render(
      <LocationProvider history={history}>
        <Link to="/request-demo/?one=two#yes">Hello</Link>
      </LocationProvider>
    );

    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/request-demo/?one=two&referringPathname=homepage#yes');
  });

  test('appends homepage as referring pathname when navigating from homepage', async () => {
    const route = '/';
    const source = createMemorySource(route);
    const history = createHistory(source);

    render(
      <LocationProvider history={history}>
        <Link to="/request-demo/">Hello</Link>
      </LocationProvider>
    );

    await screen.findByRole('link');
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/request-demo/?referringPathname=homepage');
  });
});
