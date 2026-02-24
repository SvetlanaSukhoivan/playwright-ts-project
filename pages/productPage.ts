import { Page, Locator } from "@playwright/test";
import BasePage from "./basePage";

export default class ProductPage extends BasePage {
    public locators: {
        getCategories: () => Locator;
    }


    constructor(page: Page) {
        super(page);

        this.locators = {
            getCategories: () => this.page.locator('[data-parent="#accordian"]')
        };
    }

    async getCategoriesText(): Promise<string[]> {
        return await this.locators
            .getCategories()
            .allInnerTexts();
    }
}

// without add into construstor

// locators = {
//         getCategories: (): Locator => this.page.locator('[data-parent="#accordian"]')
//     };
