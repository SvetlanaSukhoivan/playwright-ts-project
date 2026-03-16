import { test, expect } from '../fixtures/pageFixtures';

test.describe('homepage test', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.loadHomePage();
  });

  test('verify home page', async ({ header }) => {
    const loc = header.locators.getHomePageLink();
    await expect(loc).toHaveCSS('color', 'rgb(255, 165, 0)');
  });
});
