import { Page, Locator } from '@playwright/test';
import BasePage from './basePage';
import { text } from 'stream/consumers';

export default class ProductPage extends BasePage {
  public locators: {
    getCategories: () => Locator;
  };

  constructor(page: Page) {
    super(page);

    this.locators = {
      getCategories: () => this.page.locator('[data-parent="#accordian"]'),
    };
  }

  async getCategoriesText(): Promise<string[]> {
    const texts = await this.locators.getCategories().allInnerTexts();

    return texts.map((text) => text.toUpperCase());
  }
}

// async getCategoriesText(): Promise<string[]> {
//         return await this.locators
//             .getCategories()
//             .allInnerTexts();
//     }
