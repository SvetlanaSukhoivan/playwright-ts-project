import { Page, Locator } from '@playwright/test';
import BasePage from './basePage';

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
