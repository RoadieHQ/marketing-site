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
import * as googleAnalytics from '../../google-analytics/trackGoogleAnalyticsEvent';

jest.mock('gatsby', () => ({
  ...jest.requireActual('gatsby'),
  navigate: jest.fn(),
}));

jest.mock('../../google-analytics/trackGoogleAnalyticsEvent', () => ({
  trackGoogleAnalyticsEvent: jest.fn(),
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

      expect(googleAnalytics.trackGoogleAnalyticsEvent).toHaveBeenCalledWith('view_blog', {
        event_callback: expect.any(Function),
        event_timeout: 1000,
      });
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

      expect(googleAnalytics.trackGoogleAnalyticsEvent).toHaveBeenCalledWith('view_blog', {
        event_callback: expect.any(Function),
        event_timeout: 2000,
      });
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

      expect(googleAnalytics.trackGoogleAnalyticsEvent).toHaveBeenCalledWith('purchase', {
        value: 100,
        currency: 'USD',
        event_callback: expect.any(Function),
        event_timeout: 1000,
      });
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

      expect(googleAnalytics.trackGoogleAnalyticsEvent).toHaveBeenCalledWith('external_click', {
        event_callback: expect.any(Function),
        event_timeout: 1000,
      });
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

      expect(googleAnalytics.trackGoogleAnalyticsEvent).not.toHaveBeenCalled();

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

      googleAnalytics.trackGoogleAnalyticsEvent.mockImplementation((eventName, params) => {
        if (params.event_callback) {
          params.event_callback();
        }
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

      const [[, params]] = googleAnalytics.trackGoogleAnalyticsEvent.mock.calls;
      params.event_callback();

      expect(navigate).toHaveBeenCalledWith('/blog/');
    });

    describe('modifier key handling', () => {
      test('does not prevent default for Ctrl+click', async () => {
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
        const event = new MouseEvent('click', { bubbles: true, cancelable: true, ctrlKey: true });
        const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

        fireEvent(link, event);

        expect(preventDefaultSpy).not.toHaveBeenCalled();
      });

      test('does not prevent default for Cmd+click (metaKey)', async () => {
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
        const event = new MouseEvent('click', { bubbles: true, cancelable: true, metaKey: true });
        const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

        fireEvent(link, event);

        expect(preventDefaultSpy).not.toHaveBeenCalled();
      });

      test('does not prevent default for Shift+click', async () => {
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
        const event = new MouseEvent('click', { bubbles: true, cancelable: true, shiftKey: true });
        const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

        fireEvent(link, event);

        expect(preventDefaultSpy).not.toHaveBeenCalled();
      });

      test('does not prevent default for Alt+click', async () => {
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
        const event = new MouseEvent('click', { bubbles: true, cancelable: true, altKey: true });
        const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

        fireEvent(link, event);

        expect(preventDefaultSpy).not.toHaveBeenCalled();
      });

      test('does not prevent default for middle mouse button', async () => {
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
        const event = new MouseEvent('click', { bubbles: true, cancelable: true, button: 1 });
        const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

        fireEvent(link, event);

        expect(preventDefaultSpy).not.toHaveBeenCalled();
      });

      test('still tracks event for Ctrl+click but without callback', async () => {
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
        fireEvent.click(link, { ctrlKey: true });

        expect(googleAnalytics.trackGoogleAnalyticsEvent).toHaveBeenCalledWith('view_blog', {
          // No event_callback or event_timeout when modifier keys are used
        });
      });

      test('still tracks event for metaKey+click but without callback', async () => {
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
        fireEvent.click(link, { metaKey: true });

        expect(googleAnalytics.trackGoogleAnalyticsEvent).toHaveBeenCalledWith('view_blog', {
          // No event_callback or event_timeout when modifier keys are used
        });
      });

      test('includes custom params even with modifier keys', async () => {
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
        fireEvent.click(link, { ctrlKey: true });

        expect(googleAnalytics.trackGoogleAnalyticsEvent).toHaveBeenCalledWith('purchase', {
          value: 100,
          currency: 'USD',
          // No event_callback or event_timeout when modifier keys are used
        });
      });
    });

    describe('fallback timeout handling', () => {
      beforeEach(() => {
        jest.useFakeTimers();
      });

      afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
      });

      test('fallback timeout triggers navigation if gtag callback never fires', () => {
        const route = '/';
        const source = createMemorySource(route);
        const history = createHistory(source);

        // Mock gtag to never call the callback (simulating failure)
        googleAnalytics.trackGoogleAnalyticsEvent.mockImplementation(() => {
          // Do nothing - callback never fires
        });

        render(
          <LocationProvider history={history}>
            <Link to="/blog/" conversionEventName="view_blog" conversionEventTimeout={1000}>
              Blog
            </Link>
          </LocationProvider>
        );

        const link = screen.getByRole('link');
        fireEvent.click(link);

        expect(navigate).not.toHaveBeenCalled();

        // Fast-forward time to just after the fallback timeout (1000 + 100 = 1100ms)
        jest.advanceTimersByTime(1100);

        expect(navigate).toHaveBeenCalledWith('/blog/');
        expect(navigate).toHaveBeenCalledTimes(1);
      });

      test('fallback timeout is cleared when gtag callback fires normally', () => {
        const route = '/';
        const source = createMemorySource(route);
        const history = createHistory(source);

        // Mock gtag to call the callback immediately (normal behavior)
        googleAnalytics.trackGoogleAnalyticsEvent.mockImplementation((eventName, params) => {
          if (params.event_callback) {
            params.event_callback();
          }
        });

        render(
          <LocationProvider history={history}>
            <Link to="/blog/" conversionEventName="view_blog" conversionEventTimeout={1000}>
              Blog
            </Link>
          </LocationProvider>
        );

        const link = screen.getByRole('link');
        fireEvent.click(link);

        // GA callback should have triggered navigation immediately
        expect(navigate).toHaveBeenCalledWith('/blog/');
        expect(navigate).toHaveBeenCalledTimes(1);

        // Fast-forward past the fallback timeout
        jest.advanceTimersByTime(1100);

        // Navigation should still only have been called once (fallback was cleared)
        expect(navigate).toHaveBeenCalledTimes(1);
      });

      test('navigation only happens once even if both mechanisms try to fire', async () => {
        const route = '/';
        const source = createMemorySource(route);
        const history = createHistory(source);

        let storedCallback;

        // Mock gtag to store the callback but delay calling it
        googleAnalytics.trackGoogleAnalyticsEvent.mockImplementation((eventName, params) => {
          if (params.event_callback) {
            storedCallback = params.event_callback;
          }
        });

        render(
          <LocationProvider history={history}>
            <Link to="/blog/" conversionEventName="view_blog" conversionEventTimeout={1000}>
              Blog
            </Link>
          </LocationProvider>
        );

        const link = screen.getByRole('link');
        fireEvent.click(link);

        expect(navigate).not.toHaveBeenCalled();

        // Simulate gtag calling the callback after a delay
        jest.advanceTimersByTime(500);
        storedCallback();

        expect(navigate).toHaveBeenCalledWith('/blog/');
        expect(navigate).toHaveBeenCalledTimes(1);

        // Fast-forward past when the fallback would have fired
        jest.advanceTimersByTime(700);

        // Navigation should still only have been called once
        expect(navigate).toHaveBeenCalledTimes(1);
      });

      test('fallback timeout respects custom timeout value', async () => {
        const route = '/';
        const source = createMemorySource(route);
        const history = createHistory(source);

        // Mock gtag to never call the callback (simulating failure)
        googleAnalytics.trackGoogleAnalyticsEvent.mockImplementation(() => {
          // Do nothing - callback never fires
        });

        render(
          <LocationProvider history={history}>
            <Link to="/blog/" conversionEventName="view_blog" conversionEventTimeout={500}>
              Blog
            </Link>
          </LocationProvider>
        );

        const link = screen.getByRole('link');
        fireEvent.click(link);

        expect(navigate).not.toHaveBeenCalled();

        // Fast-forward to just before fallback timeout (500 + 100 = 600ms)
        jest.advanceTimersByTime(599);
        expect(navigate).not.toHaveBeenCalled();

        // Advance the final millisecond to trigger the fallback
        jest.advanceTimersByTime(1);
        expect(navigate).toHaveBeenCalledWith('/blog/');
      });
    });
  });
});
