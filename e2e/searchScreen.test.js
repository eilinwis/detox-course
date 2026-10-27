const { expect: jestExpect } = require('@jest/globals');
const {
  enableDemoMode,
  disableDemoMode,
  disableAnimations,
  takeScreenshot,
} = require('./utils/screenshot');

describe('Search screen', () => {
  beforeAll(async () => {
    disableAnimations();
    enableDemoMode();
    await device.launchApp({ newInstance: true });
  });

  afterAll(() => {
    disableDemoMode();
  });

  it('matches the screenshot', async () => {
    await element(by.text('Search')).tap();
    await waitFor(element(by.id('searchInput'))).toBeVisible().withTimeout(10000);

    const image = await takeScreenshot('search-screen');

    jestExpect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: 'search-screen',
      failureThreshold: 0.001,
      failureThresholdType: 'percent',
    });
  });
});
