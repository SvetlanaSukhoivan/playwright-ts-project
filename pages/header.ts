import { Page, Locator } from '@playwright/test';
import BasePage from './basePage';
import ContactUsPage from './contactUsPage';
import ProductPage from './productPage';

export default class Header extends BasePage {
    public locators: {
        getHomePageLink: () => Locator;
        getProductsLink: () => Locator;
        getContactUsLink: () => Locator;
    }

    constructor(page: Page) {
        super(page);

        this.locators = {
            getHomePageLink: () => this.page.getByText('Home'),
            getProductsLink: () => this.page.getByText('Products'),
            getContactUsLink: () => this.page.getByText('Contact us')
        };
    }
    
    // Явно указываем, что вернется ContactUsPage
    async clickContactUsLink(): Promise<ContactUsPage> {
        await this.locators.getContactUsLink().click();
        return new ContactUsPage(this.page);
    }

    // Явно указываем, что вернется ProductPage
    async clickProductLink(): Promise<ProductPage> {
        await this.locators.getProductsLink().click();
        return new ProductPage(this.page);
    }
}


// без добавления в конструктор
// locators = {
//         getHomePageLink: ():Locator => this.page.getByText('Home'),
//         getProductsLink: (): Locator => this.page.getByText('Products'),
//         getContactUsLink: (): Locator => this.page.getByText('Contact us')
//     }