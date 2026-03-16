import { Page, Locator } from '@playwright/test';
import BasePage from './basePage';
import { ContactUsForm } from '../helpers/testData';

export default class ContactUsPage extends BasePage {
  public locators: {
    getInputFieldName: () => Locator;
    getInputFieldEmail: () => Locator;
    getInputFieldSubject: () => Locator;
    getInputFieldMessage: () => Locator;
    getSubmitButton: () => Locator;
    getSuccessSubmissionMessage: () => Locator;
  };

  constructor(page: Page) {
    super(page);

    this.locators = {
      getInputFieldName: () => this.page.getByPlaceholder('Name'),
      getInputFieldEmail: () => this.page.getByTestId('email'),
      getInputFieldSubject: () => this.page.getByPlaceholder('Subject'),
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

  async fillSubjectField(subject: string): Promise<this> {
    await this.locators.getInputFieldSubject().fill(subject);
    return this;
  }

  async fillMessageField(message: string): Promise<this> {
    await this.locators.getInputFieldMessage().fill(message);
    return this;
  }

  async fillEntireContactForm(data: ContactUsForm): Promise<this> {
    await this.fillNameField(data.name);
    await this.fillEmailField(data.email);
    await this.fillSubjectField(data.subject);
    await this.fillMessageField(data.message);
    return this;
  }

  async submitContactForm(): Promise<this> {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });

    await this.page.waitForLoadState('networkidle');

    await this.locators.getSubmitButton().scrollIntoViewIfNeeded();

    await this.locators.getSubmitButton().dispatchEvent('click');

    return this;
  }
}
