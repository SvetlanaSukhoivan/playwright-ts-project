import { test, expect } from '@playwright/test';
import { contactUsData } from '../helpers/testData';
import ContactUsPage from '../pages/contactUsPage';
import Header from '../pages/header';
import HomePage from '../pages/homePage';

test.describe("contact us page test", () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.loadHomePage();
    });

    test("verify contact us form submission", async ({ page }) => {
        const header = new Header(page);
        header.clickContactUsLink();

        const contactUsPage = new ContactUsPage(page);
        await contactUsPage.fillNameField(contactUsData.name);
        await contactUsPage.fillEmailField(contactUsData.email);
        await contactUsPage.fillMessageField(contactUsData.message);

        await contactUsPage.acceptConfirmationPopup();
        await contactUsPage.clickSubmitButton();

        const divText = contactUsPage.locators.getSuccessSubmissionMessage();
        await expect(divText).toBeVisible();
        await expect(divText).toHaveText(contactUsData.successSubmissionMessage);
    });
})

