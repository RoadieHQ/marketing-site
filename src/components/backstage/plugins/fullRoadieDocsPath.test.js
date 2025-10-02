import fullRoadieDocsPath from './fullRoadieDocsPath';


describe('#fullRoadieDocsPath', () => {
  test('transforms paths as expected', () => {
    const tests = [
      ['integrations/snyk', '/docs/integrations/snyk'],
      ['/integrations/sonar', '/docs/integrations/sonar'],
      ['docs/integrations/yes', '/docs/integrations/yes'],
      ['/docs/integrations/no/', '/docs/integrations/no/'],
      [null, '/docs/integrations/'],
    ];

    for (const test of tests) {
      expect(fullRoadieDocsPath(test[0])).toEqual(test[1]);
    }
  });
});
