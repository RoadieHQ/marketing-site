import { expect } from 'chai';

import { isDiscouragedEmail } from './EmailField';

describe('isDiscouragedEmail', function () {
  it('should return false for normal company emails', function () {
    expect(isDiscouragedEmail('david@mycompany.com')).to.eq(false);
  });

  it('should return true for gmails', function () {
    expect(isDiscouragedEmail('david@gmail.com')).to.eq(true);
  });

  it('should return true for hotmails', function () {
    expect(isDiscouragedEmail('david@hotmail.co')).to.eq(true);
  });

  it('should return true for yahoo', function () {
    expect(isDiscouragedEmail('david@yahoo.com')).to.eq(true);
  });

  it('should return false for postfixed domains', function () {
    expect(isDiscouragedEmail('david@yahoowidgets.com')).to.eq(false);
  });

  it('should return false for prefixed domains', function () {
    expect(isDiscouragedEmail('david@iloveyahoo.com')).to.eq(false);
  });
});
