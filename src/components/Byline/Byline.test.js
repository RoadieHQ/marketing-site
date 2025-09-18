/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Byline from './Byline';

describe('Byline', function () {
  const publishDateString = '2021-05-10T21:00:00.0Z';
  const validationDateString = '2021-05-22T21:00:00.0Z';
  const author = { name: 'Jimmy Joe' };

  beforeEach(function () {
    const now = new Date(2021, 5, 7);
    jest.useFakeTimers();
    jest.setSystemTime(now);
  });

  afterEach(function () {
    jest.useRealTimers();
  });

  describe('when showLastValidated=false', function () {
    describe('and relative=false', function () {
      it('should say the date', function () {
        const { container } = render(
          <Byline frontmatter={{ date: publishDateString }} />
        );

        expect(container).toHaveTextContent('Published on May 10th, 2021');
      });

      it('should say the date and author when available', function () {
        const { container } = render(
          <Byline frontmatter={{ date: publishDateString, author }} />
        );

        expect(container).toHaveTextContent('Published on May 10th, 2021 by Jimmy Joe');
      });
    });

    describe('and relative=true', function () {
      it('should say the relative date', function () {
        const { container } = render(
          <Byline frontmatter={{ date: publishDateString }} relative={true} />
        );

        expect(container).toHaveTextContent('Published 27 days ago');
      });

      it('should say the date and author when available', function () {
        const { container } = render(
          <Byline frontmatter={{ date: publishDateString, author }} relative={true} />
        );

        expect(container).toHaveTextContent('Published 27 days ago by Jimmy Joe');
      });
    });
  });

  describe('when showLastValidated=true', function () {
    describe('and relative=false', function () {
      it('should say the dates', function () {
        const { container } = render(
          <Byline
            frontmatter={{
              date: publishDateString ,
              lastValidated: validationDateString,
            }}
            showLastValidated={true}
          />
        );

        expect(container).toHaveTextContent(
          'Last validated on May 22nd, 2021 • Originally published on May 10th, 2021');
      });

      it('should say the dates and the author if available', function () {
        const { container } = render(
          <Byline
            frontmatter={{
              date: publishDateString ,
              lastValidated: validationDateString,
              author,
            }}
            showLastValidated={true}
          />
        );

        expect(container).toHaveTextContent(
          'Last validated on May 22nd, 2021 • Originally published on May 10th, 2021 by Jimmy Joe');
      });
    });

    describe('and relative=true', function () {
      it('should say relative dates', function () {
        const { container } = render(
          <Byline
            frontmatter={{
              date: publishDateString,
              lastValidated: validationDateString,
            }}
            showLastValidated={true}
            relative={true}
          />
        );

        expect(container).toHaveTextContent(
          'Last validated 15 days ago • Originally published 27 days ago');
      });
    });
  });
});
