import { isDiscouragedEmail } from './EmailField';

describe('isDiscouragedEmail', function () {
  it('should return false for normal company emails', function () {
    expect(isDiscouragedEmail('david@mycompany.com')).toEqual(false);
  });

  it('should return true for gmails', function () {
    expect(isDiscouragedEmail('david@gmail.com')).toEqual(true);
  });

  it('should return true for hotmails', function () {
    expect(isDiscouragedEmail('david@hotmail.co')).toEqual(true);
  });

  it('should return true for yahoo', function () {
    expect(isDiscouragedEmail('david@yahoo.com')).toEqual(true);
  });

  it('should return false for postfixed domains', function () {
    expect(isDiscouragedEmail('david@yahoowidgets.com')).toEqual(false);
  });

  it('should return false for prefixed domains', function () {
    expect(isDiscouragedEmail('david@iloveyahoo.com')).toEqual(false);
  });
});
