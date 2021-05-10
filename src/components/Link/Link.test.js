import { expect } from 'chai';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Link from './Link';

Enzyme.configure({ adapter: new Adapter() });

describe('Link', function() {
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
});
