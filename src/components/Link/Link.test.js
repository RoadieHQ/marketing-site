/**
 * @jest-environment jsdom
 */

import React from 'react';
import { jest } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemorySource, createHistory, LocationProvider } from '@reach/router';
import { navigate } from 'gatsby';

import Link from './Link';
import * as googleAnalytics from '../../googleAnalytics';

jest.mock('gatsby', () => ({
  ...jest.requireActual('gatsby'),
  navigate: jest.fn(),
}));

jest.mock('../../googleAnalytics', () => ({
  trackConversionEvent: jest.fn(),
}));

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

  describe('Conversion tracking', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('tracks conversion event on internal link click', async () => {
      const route = '/';
      const source = createMemorySource(route);
      const history = createHistory(source);

      render(
        <LocationProvider history={history}>
          <Link to="/blog/" conversionEventName="view_blog">
            Blog
          </Link>
        </LocationProvider>
      );

      const link = screen.getByRole('link');
      fireEvent.click(link);

      expect(googleAnalytics.trackConversionEvent).toHaveBeenCalledWith(
        'view_blog',
        expect.any(Function),
        1000,
        {}
      );
    });

    test('tracks conversion event with custom timeout', async () => {
      const route = '/';
      const source = createMemorySource(route);
      const history = createHistory(source);

      render(
        <LocationProvider history={history}>
          <Link to="/blog/" conversionEventName="view_blog" conversionEventTimeout={2000}>
            Blog
          </Link>
        </LocationProvider>
      );

      const link = screen.getByRole('link');
      fireEvent.click(link);

      expect(googleAnalytics.trackConversionEvent).toHaveBeenCalledWith(
        'view_blog',
        expect.any(Function),
        2000,
        {}
      );
    });

    test('tracks conversion event with custom params', async () => {
      const route = '/';
      const source = createMemorySource(route);
      const history = createHistory(source);

      const customParams = { value: 100, currency: 'USD' };

      render(
        <LocationProvider history={history}>
          <Link to="/blog/" conversionEventName="purchase" conversionEventParams={customParams}>
            Blog
          </Link>
        </LocationProvider>
      );

      const link = screen.getByRole('link');
      fireEvent.click(link);

      expect(googleAnalytics.trackConversionEvent).toHaveBeenCalledWith(
        'purchase',
        expect.any(Function),
        1000,
        customParams
      );
    });

    test('tracks conversion event on external link click', async () => {
      const route = '/';
      const source = createMemorySource(route);
      const history = createHistory(source);

      render(
        <LocationProvider history={history}>
          <Link to="https://example.com" conversionEventName="external_click">
            External
          </Link>
        </LocationProvider>
      );

      const link = screen.getByRole('link');
      fireEvent.click(link);

      expect(googleAnalytics.trackConversionEvent).toHaveBeenCalledWith(
        'external_click',
        expect.any(Function),
        1000,
        {}
      );
    });

    test('does not track conversion event when conversionEventName is not provided', async () => {
      const route = '/';
      const source = createMemorySource(route);
      const history = createHistory(source);

      // Mock Gatsby's internal navigation for this test
      global.___navigate = jest.fn();

      render(
        <LocationProvider history={history}>
          <Link to="/blog/">Blog</Link>
        </LocationProvider>
      );

      const link = screen.getByRole('link');
      fireEvent.click(link);

      expect(googleAnalytics.trackConversionEvent).not.toHaveBeenCalled();

      // Cleanup
      delete global.___navigate;
    });

    test('prevents default navigation when conversion event is tracked', async () => {
      const route = '/';
      const source = createMemorySource(route);
      const history = createHistory(source);

      render(
        <LocationProvider history={history}>
          <Link to="/blog/" conversionEventName="view_blog">
            Blog
          </Link>
        </LocationProvider>
      );

      const link = screen.getByRole('link');
      const event = new MouseEvent('click', { bubbles: true, cancelable: true });
      const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

      fireEvent(link, event);

      expect(preventDefaultSpy).toHaveBeenCalled();
    });

    test('callback navigates to internal URL using gatsby navigate', async () => {
      const route = '/';
      const source = createMemorySource(route);
      const history = createHistory(source);

      googleAnalytics.trackConversionEvent.mockImplementation((eventName, callback) => {
        callback();
      });

      render(
        <LocationProvider history={history}>
          <Link to="/blog/" conversionEventName="view_blog">
            Blog
          </Link>
        </LocationProvider>
      );

      const link = screen.getByRole('link');
      fireEvent.click(link);

      const [[, callback]] = googleAnalytics.trackConversionEvent.mock.calls;
      callback();

      expect(navigate).toHaveBeenCalledWith('/blog/');
    });
  });
});
