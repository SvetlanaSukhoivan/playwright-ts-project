import { Page, Locator } from '@playwright/test';
import BasePage from './basePage';
import { ContactUsForm } from '../helpers/testData';

export default class ContactUsPage extends BasePage {
  public locators: {
    getInputFieldName: () => Locator;
    getInputFieldEmail: () => Locator;
    getInputFieldMessage: () => Locator;
    getSubmitButton: () => Locator;
    getSuccessSubmissionMessage: () => Locator;
  };

  constructor(page: Page) {
    super(page);

    this.locators = {
      getInputFieldName: () => this.page.getByPlaceholder('Name'),
      getInputFieldEmail: () => this.page.getByTestId('email'),
      getInputFieldMessage: () => this.page.locator('#message'),
      getSubmitButton: () => this.page.getByTestId('submit-button'),
      getSuccessSubmissionMessage: () => this.page.locator('.contact-form .status'),
    };
  }

  async fillNameField(name: string): Promise<this> {
    await this.locators.getInputFieldName().fill(name);
    return this;
  }

  async fillEmailField(email: string): Promise<this> {
    await this.locators.getInputFieldEmail().fill(email);
    return this;
  }

  async fillMessageField(message: string): Promise<this> {
    await this.locators.getInputFieldMessage().fill(message);
    return this;
  }

  async fillEntireContactForm(data: ContactUsForm): Promise<this> {
    await this.fillNameField(data.name);
    await this.fillEmailField(data.email);
    await this.fillMessageField(data.message);
    return this;
  }

  async acceptConfirmationPopup(): Promise<this> {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
    return this;
  }

  async clickSubmitButton(): Promise<this> {
    await this.page.evaluate(() => window.scrollBy(0, 500));
    // await this.locators.getSubmitButton().scrollIntoViewIfNeeded();
    await this.locators.getSubmitButton().click();
    return this;
  }
}
