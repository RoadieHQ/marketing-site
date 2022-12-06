import { expect } from 'chai';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Link from './Link';

Enzyme.configure({ adapter: new Adapter() });

describe('Link', function () {
  beforeEach(function () {
    global.window = {
      location: {
        origin: 'http://example.com',
      },
    };
  });

  it('should return a ForwardRef for links starting with a slash', function () {
    const wrapper = shallow(
      <Link to="/">Hello</Link>
    );
    expect(wrapper.name()).to.equal('ForwardRef');
  });

  it('should return a ForwardRef for links starting with a hash', function () {
    const wrapper = shallow(
      <Link to="#other-element">Hello</Link>
    );
    expect(wrapper.name()).to.equal('ForwardRef');
  });

  it('should return an OutboundLink for external links', function () {
    const wrapper = shallow(
      <Link to="http://example.com">Hello</Link>
    );
    expect(wrapper.name()).to.equal('OutboundLink');
  });

  it('should attach target=_blank to external links', function () {
    const wrapper = shallow(
      <Link to="http://example.com">Hello</Link>
    );

    expect(wrapper.props().target).to.equal('_blank');
  });

  it('should attach privacy rel to external links', function () {
    const wrapper = shallow(
      <Link to="http://example.com">Hello</Link>
    );

    expect(wrapper.props().rel).to.equal('noopener noreferrer');
  });

  it('should force internal links to end with a slash', function () {
    const wrapper = shallow(
      <Link to="/blog/post">Hello</Link>
    );

    expect(wrapper.props().to).to.equal('/blog/post/');
  });

  it('should force internal links with a hash to end with a slash', function () {
    const wrapper = shallow(
      <Link to="/blog/post#content-id">Hello</Link>
    );

    expect(wrapper.props().to).to.equal('/blog/post/#content-id');
  });

  it('should leave internal links with hash only alone', function () {
    const wrapper = shallow(
      <Link to="#content-id">Hello</Link>
    );

    expect(wrapper.props().to).to.equal('#content-id');
  });
});
