import { test , expect } from '@playwright/test';
import { arrCategories } from '../helpers/testData';
import Header from '../pages/header';
import HomePage from '../pages/homePage';
import ProductPage from '../pages/productPage';

test.describe("products page test", () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.loadHomePage();
    });

    test('verify product categories', async ({ page }) => {
        const header = new Header(page);

        const productPage = await header.clickProductLink();

        const data = await productPage.getCategoriesText();

        expect(data).toEqual(arrCategories);
    });
});   

