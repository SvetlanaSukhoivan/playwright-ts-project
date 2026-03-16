import { test as base } from '@playwright/test';
import HomePage from '../pages/homePage';
import Header from '../pages/header';
import ContactUsPage from '../pages/contactUsPage';
import ProductPage from '../pages/productPage';

type MyFixtures = {
  homePage: HomePage;
  header: Header;
  contactUsPage: ContactUsPage;
  productPage: ProductPage;
};

export const test = base.extend<MyFixtures>({
  // Implement AdBlock
  page: async ({ page }, use) => {
    await page.route('**/*googleads.g.doubleclick.net/**', (route) => route.abort());
    await page.route('**/*pagead2.googlesyndication.com/**', (route) => route.abort());
    await page.route('**/*ad.plus/**', (route) => route.abort());
    await use(page);
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  header: async ({ page }, use) => {
    await use(new Header(page));
  },

  contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
});

export { expect } from '@playwright/test';
