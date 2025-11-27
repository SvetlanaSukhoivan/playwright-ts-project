import { test , expect } from '@playwright/test';
import Header from '../pages/header';
import HomePage from '../pages/homePage';


test.describe('homepage test', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.loadHomePage();
    });

    test("verify home page", async ({ page }) => {  
        const header = new Header(page);

        const loc = header.locators.getHomePageLink();
        await expect(loc).toHaveCSS("color", "rgb(255, 165, 0)");

    });
});    
