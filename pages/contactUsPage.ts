import { Page, Locator } from "@playwright/test";
import BasePage from "./basePage";

export default class ContactUsPage extends BasePage {
    // Объявляем структуру объекта locators (для автокомплита)
    public locators: {
        getInputFieldName: () => Locator;
        getInputFieldEmail: () => Locator;
        getInputFieldMessage: () => Locator;
        getSubmitButton: () => Locator;
        getSuccessSubmissionMessage: () => Locator;
    };


    constructor(page: Page) {
        super(page);

// Инициализация внутри конструктора. Это гарантирует, что this.page уже существует и корректен
        this.locators = {
            getInputFieldName: () => this.page.getByPlaceholder('Name'),
            getInputFieldEmail: () => this.page.getByTestId('email'),
            getInputFieldMessage: () => this.page.locator('#message'),
            getSubmitButton: () => this.page.getByTestId('submit-button'),
            getSuccessSubmissionMessage: () => this.page.locator('.contact-form .status')
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
    // Лучше использовать page.once, чтобы обработать алерт один раз перед кликом, который его вызывает
    async acceptConfirmationPopup(): Promise<this> {
        this.page.once('dialog', async (dialog) => {
            await dialog.accept();
        });
        return this;
    }

    async clickSubmitButton(): Promise<this> {
        await this.locators
            .getSubmitButton()
            .click();
        return this;
    }
}

// без добавления в конструктор 
// locators = {
//         getInputFieldName: (): Locator => this.page.getByPlaceholder('Name'),
//         getInputFieldEmail: (): Locator => this.page.locator('input[data-qa="email"]'),
//         getInputFieldMessage: (): Locator => this.page.locator('#message'),
//         getSubmitButton: (): Locator => this.page.locator('input[data-qa="submit-button"]'),
//         getSuccessSubmissionMessage: (): Locator => this.page.locator('.contact-form .status')
//     };