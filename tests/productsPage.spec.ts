import { test , expect } from '@playwright/test';
import { arrCategories } from '../helpers/testData';
import Header from '../pages/header';
import HomePage from '../pages/homePage';
import ProductPage from '../pages/productPage';

test.describe("contact us page test", () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.loadHomePage();
    });

    test('verify product categories', async ({ page }) => {
        const header = new Header(page);
        header.clickProductLink();

        const productPage = new ProductPage(page);
        const data = await productPage.getCategoriesText();

        expect(data).toEqual(arrCategories);

    });
});   

//add notification - TEST LINE!
