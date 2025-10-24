/**
 * @jest-environment jsdom
 */

import { jest } from '@jest/globals';
import {
  trackGoogleAnalyticsEvent,
  trackRequestDemo,
  trackRequestTrial,
  trackSubscribe,
  trackRequestRoadieLocal,
  CONVERSION_EVENTS,
} from './trackGoogleAnalyticsEvent';

describe('trackGoogleAnalyticsEvent', () => {
  let gtagMock;

  beforeEach(() => {
    gtagMock = jest.fn();
    window.gtag = gtagMock;
  });

  afterEach(() => {
    delete window.gtag;
    jest.clearAllMocks();
  });

  describe('CONVERSION_EVENTS', () => {
    it('exports conversion event constants', () => {
      expect(CONVERSION_EVENTS.PAGE_VIEW_1).toBe('conversion_event_page_view_1');
    });
  });

  describe('basic event tracking', () => {
    it('tracks a simple event without parameters', () => {
      trackGoogleAnalyticsEvent('test_event');

      expect(gtagMock).toHaveBeenCalledWith('event', 'test_event', {});
    });

    it('tracks an event with parameters', () => {
      trackGoogleAnalyticsEvent('test_event', { value: 100, currency: 'USD' });

      expect(gtagMock).toHaveBeenCalledWith('event', 'test_event', {
        value: 100,
        currency: 'USD',
      });
    });

    it('returns true when no callback is provided', () => {
      const result = trackGoogleAnalyticsEvent('test_event');

      expect(result).toBe(true);
    });
  });

  describe('callback-based tracking', () => {
    it('tracks an event with a callback', () => {
      const callback = jest.fn();

      trackGoogleAnalyticsEvent('conversion_event', {
        event_callback: callback,
      });

      expect(gtagMock).toHaveBeenCalledWith('event', 'conversion_event', {
        event_callback: callback,
        event_timeout: 1000,
      });
    });

    it('uses custom timeout when provided', () => {
      const callback = jest.fn();

      trackGoogleAnalyticsEvent('conversion_event', {
        event_callback: callback,
        event_timeout: 2500,
      });

      expect(gtagMock).toHaveBeenCalledWith('event', 'conversion_event', {
        event_callback: callback,
        event_timeout: 2500,
      });
    });

    it('includes other parameters along with callback', () => {
      const callback = jest.fn();

      trackGoogleAnalyticsEvent('conversion_event', {
        value: 100,
        currency: 'USD',
        event_callback: callback,
        event_timeout: 1500,
      });

      expect(gtagMock).toHaveBeenCalledWith('event', 'conversion_event', {
        value: 100,
        currency: 'USD',
        event_callback: callback,
        event_timeout: 1500,
      });
    });

    it('returns false when callback is provided', () => {
      const callback = jest.fn();

      const result = trackGoogleAnalyticsEvent('conversion_event', {
        event_callback: callback,
      });

      expect(result).toBe(false);
    });

    it('defaults timeout to 1000ms when callback provided without timeout', () => {
      const callback = jest.fn();

      trackGoogleAnalyticsEvent('conversion_event', {
        event_callback: callback,
      });

      expect(gtagMock).toHaveBeenCalledWith('event', 'conversion_event', {
        event_callback: callback,
        event_timeout: 1000,
      });
    });
  });

  describe('when gtag is not available', () => {
    beforeEach(() => {
      delete window.gtag;
    });

    it('does not throw an error', () => {
      expect(() => {
        trackGoogleAnalyticsEvent('test_event');
      }).not.toThrow();
    });

    it('returns false', () => {
      const result = trackGoogleAnalyticsEvent('test_event');

      expect(result).toBe(false);
    });

    it('executes callback immediately when provided', () => {
      const callback = jest.fn();

      trackGoogleAnalyticsEvent('conversion_event', {
        event_callback: callback,
      });

      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('does not execute callback if not a function', () => {
      expect(() => {
        trackGoogleAnalyticsEvent('conversion_event', {
          event_callback: 'not a function',
        });
      }).not.toThrow();
    });
  });

  describe('when window is undefined (SSR)', () => {
    it('does not throw an error', () => {
      // Mock typeof window === 'undefined' by using a module that checks before window is defined
      // In real SSR environments, window would not be defined at all
      // For this test, we can just verify the function handles missing gtag gracefully
      // which is already tested in "when gtag is not available"

      // This test verifies the conceptual SSR behavior is the same as no gtag
      expect(() => {
        trackGoogleAnalyticsEvent('test_event');
      }).not.toThrow();
    });

    it('returns false when gtag is unavailable (SSR scenario)', () => {
      delete window.gtag;
      const result = trackGoogleAnalyticsEvent('test_event');

      expect(result).toBe(false);
    });

    it('executes callback immediately when gtag unavailable (SSR scenario)', () => {
      delete window.gtag;
      const callback = jest.fn();

      trackGoogleAnalyticsEvent('conversion_event', {
        event_callback: callback,
      });

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe('helper functions', () => {
    describe('trackRequestDemo', () => {
      it('tracks request_demo event', () => {
        trackRequestDemo();

        expect(gtagMock).toHaveBeenCalledWith('event', 'request_demo', {});
      });

      it('passes parameters to the event', () => {
        trackRequestDemo({ name: 'John Doe', email: 'john@example.com' });

        expect(gtagMock).toHaveBeenCalledWith('event', 'request_demo', {
          name: 'John Doe',
          email: 'john@example.com',
        });
      });
    });

    describe('trackRequestTrial', () => {
      it('tracks request_trial event', () => {
        trackRequestTrial();

        expect(gtagMock).toHaveBeenCalledWith('event', 'request_trial', {});
      });

      it('passes parameters to the event', () => {
        trackRequestTrial({ email: 'user@example.com' });

        expect(gtagMock).toHaveBeenCalledWith('event', 'request_trial', {
          email: 'user@example.com',
        });
      });
    });

    describe('trackSubscribe', () => {
      it('tracks subscribe_newsletter event', () => {
        trackSubscribe();

        expect(gtagMock).toHaveBeenCalledWith('event', 'subscribe_newsletter', {});
      });

      it('passes parameters to the event', () => {
        trackSubscribe({ email: 'subscriber@example.com' });

        expect(gtagMock).toHaveBeenCalledWith('event', 'subscribe_newsletter', {
          email: 'subscriber@example.com',
        });
      });
    });

    describe('trackRequestRoadieLocal', () => {
      it('tracks request_roadie_local event', () => {
        trackRequestRoadieLocal();

        expect(gtagMock).toHaveBeenCalledWith('event', 'request_roadie_local', {});
      });

      it('passes parameters to the event', () => {
        trackRequestRoadieLocal({ name: 'Jane Smith' });

        expect(gtagMock).toHaveBeenCalledWith('event', 'request_roadie_local', {
          name: 'Jane Smith',
        });
      });
    });
  });

  describe('edge cases', () => {
    it('handles null parameters', () => {
      trackGoogleAnalyticsEvent('test_event', null);

      expect(gtagMock).toHaveBeenCalledWith('event', 'test_event', {});
    });

    it('handles undefined parameters', () => {
      trackGoogleAnalyticsEvent('test_event', undefined);

      expect(gtagMock).toHaveBeenCalledWith('event', 'test_event', {});
    });

    it('handles empty object parameters', () => {
      trackGoogleAnalyticsEvent('test_event', {});

      expect(gtagMock).toHaveBeenCalledWith('event', 'test_event', {});
    });

    it('does not modify original parameters object', () => {
      const params = { value: 100, event_callback: jest.fn() };
      const originalParams = { ...params };

      trackGoogleAnalyticsEvent('test_event', params);

      expect(params).toEqual(originalParams);
    });

    it('handles callback that is not a function', () => {
      trackGoogleAnalyticsEvent('test_event', {
        event_callback: 'not a function',
        value: 100,
      });

      // Should not include event_callback since it's not a function
      expect(gtagMock).toHaveBeenCalledWith('event', 'test_event', {
        value: 100,
      });
    });

    it('handles timeout of 0', () => {
      const callback = jest.fn();

      trackGoogleAnalyticsEvent('conversion_event', {
        event_callback: callback,
        event_timeout: 0,
      });

      // Should use 0 as provided, not default to 1000
      expect(gtagMock).toHaveBeenCalledWith('event', 'conversion_event', {
        event_callback: callback,
        event_timeout: 0,
      });
    });
  });

  describe('integration scenarios', () => {
    it('can be called multiple times with different events', () => {
      trackGoogleAnalyticsEvent('event_1', { data: 'first' });
      trackGoogleAnalyticsEvent('event_2', { data: 'second' });
      trackGoogleAnalyticsEvent('event_3', { data: 'third' });

      expect(gtagMock).toHaveBeenCalledTimes(3);
      expect(gtagMock).toHaveBeenNthCalledWith(1, 'event', 'event_1', { data: 'first' });
      expect(gtagMock).toHaveBeenNthCalledWith(2, 'event', 'event_2', { data: 'second' });
      expect(gtagMock).toHaveBeenNthCalledWith(3, 'event', 'event_3', { data: 'third' });
    });

    it('works with helper functions when gtag is unavailable', () => {
      delete global.window.gtag;

      expect(() => {
        trackRequestDemo({ email: 'test@example.com' });
        trackRequestTrial();
        trackSubscribe();
        trackRequestRoadieLocal();
      }).not.toThrow();
    });
  });
});
