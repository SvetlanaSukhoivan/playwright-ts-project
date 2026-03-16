import { test, expect } from '../fixtures/pageFixtures';
import { contactUsData } from '../helpers/testData';

test.describe('contact us page test', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(async ({ homePage }) => {
    await homePage.loadHomePage();
  });

  test('verify contact us form submission', async ({ header }) => {
    const contactUsPage = await header.clickContactUsLink();

    await contactUsPage.fillEntireContactForm(contactUsData);

    await contactUsPage.submitContactForm();

    const divText = contactUsPage.locators.getSuccessSubmissionMessage();

    await expect(divText).toBeVisible();
    await expect(divText).toHaveText(contactUsData.successSubmissionMessage);
  });
});
