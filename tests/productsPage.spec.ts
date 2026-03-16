import { test, expect } from '../fixtures/pageFixtures';
import { arrCategories } from '../helpers/testData';

test.describe('products page test', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.loadHomePage();
  });

  test('verify product categories', async ({ header, page }) => {
    const productPage = await header.clickProductLink();

    await page.locator('.left-sidebar h2').first().waitFor({ state: 'visible' });

    const data = await productPage.getCategoriesText();
    expect(data).toEqual(arrCategories);
  });
});
