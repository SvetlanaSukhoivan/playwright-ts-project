import { Page, Locator } from "@playwright/test";

export default class BasePage {
    protected page: Page;

    protected consentButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.consentButton = this.page.getByRole('button',{ name: 'Consent', exact: true });
   
        this.page.addLocatorHandler(
            this.consentButton,
            async () => {
                await this.consentButton.click();
                await this.consentButton.waitFor({ state: 'hidden' });
            }
        ); 
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }
}