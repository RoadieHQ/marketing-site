import { expect } from 'chai';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Byline from './Byline';

Enzyme.configure({ adapter: new Adapter() });

describe('Byline', function () {
  let clock;
  const publishDateString = '2021-05-10T21:00:00.0Z';
  const validationDateString = '2021-05-22T21:00:00.0Z';
  const author = { name: 'Jimmy Joe' };

  beforeEach(function () {
    const now = new Date(2021, 5, 7);
    clock = sinon.useFakeTimers(now.getTime()); 
  });

  afterEach(function () {
    clock.restore();
  });

  describe('when showLastValidated=false', function () {
    describe('and relative=false', function () {
      it('should say the date', function () {
        const wrapper = shallow(
          <Byline frontmatter={{ date: publishDateString }} />
        );

        expect(wrapper.text()).to.equal('Published on May 10th, 2021');
      });

      it('should say the date and author when available', function () {
        const wrapper = shallow(
          <Byline frontmatter={{ date: publishDateString, author }} />
        );

        expect(wrapper.text()).to.equal('Published on May 10th, 2021 by Jimmy Joe');
      });
    });

    describe('and relative=true', function () {
      it('should say the relative date', function () {
        const wrapper = shallow(
          <Byline frontmatter={{ date: publishDateString }} relative={true} />
        );

        expect(wrapper.text()).to.equal('Published 27 days ago');
      });

      it('should say the date and author when available', function () {
        const wrapper = shallow(
          <Byline frontmatter={{ date: publishDateString, author }} relative={true} />
        );

        expect(wrapper.text()).to.equal('Published 27 days ago by Jimmy Joe');
      });
    });
  });

  describe('when showLastValidated=true', function () {
    describe('and relative=false', function () {
      it('should say the dates', function () {
        const wrapper = shallow(
          <Byline
            frontmatter={{
              date: publishDateString ,
              lastValidated: validationDateString,
            }}
            showLastValidated={true}
          />
        );

        expect(wrapper.text()).to.equal(
          'Last validated on May 22nd, 2021 • Originally published on May 10th, 2021');
      });

      it('should say the dates and the author if available', function () {
        const wrapper = shallow(
          <Byline
            frontmatter={{
              date: publishDateString ,
              lastValidated: validationDateString,
              author,
            }}
            showLastValidated={true}
          />
        );

        expect(wrapper.text()).to.equal(
          'Last validated on May 22nd, 2021 • Originally published on May 10th, 2021 by Jimmy Joe');
      });
    });

    describe('and relative=true', function () {
      it('should say relative dates', function () {
        const wrapper = shallow(
          <Byline
            frontmatter={{
              date: publishDateString,
              lastValidated: validationDateString,
            }}
            showLastValidated={true}
            relative={true}
          />
        );

        expect(wrapper.text()).to.equal(
          'Last validated 15 days ago • Originally published 27 days ago');
      });
    });
  });
});
