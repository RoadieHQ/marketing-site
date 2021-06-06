import { expect } from 'chai';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import DatePublished from './DatePublished';

Enzyme.configure({ adapter: new Adapter() });

describe('DatePublished', function () {
  let clock;

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
          <DatePublished frontmatter={{ date: '2021-05-10T21:00:00.0Z' }} />
        );

        expect(wrapper.text()).to.equal('Published on May 10th, 2021');
      });
    });

    describe('and relative=true', function () {
      it('should say the relative date', function () {
        const wrapper = shallow(
          <DatePublished frontmatter={{ date: '2021-05-10T21:00:00.0Z' }} relative={true} />
        );

        expect(wrapper.text()).to.equal('Published 27 days ago');
      });
    });
  });

  describe('when showLastValidated=true', function () {
    describe('and relative=false', function () {
      it('should say the dates', function () {
        const wrapper = shallow(
          <DatePublished
            frontmatter={{
              date: '2021-05-10T21:00:00.0Z',
              lastValidated: '2021-05-22T21:00:00.0Z',
            }}
            showLastValidated={true}
          />
        );

        expect(wrapper.text()).to.equal(
          'Last validated on May 22nd, 2021 • Originally published on May 10th, 2021');
      });
    });

    describe('and relative=true', function () {
      it('should say relative dates', function () {
        const wrapper = shallow(
          <DatePublished
            frontmatter={{
              date: '2021-05-10T21:00:00.0Z',
              lastValidated: '2021-05-22T21:00:00.0Z',
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
