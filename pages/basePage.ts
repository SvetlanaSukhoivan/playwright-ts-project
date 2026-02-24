import { Page, Locator } from "@playwright/test";

export default class BasePage {
    protected page: Page;
// Сохраняем локатор как свойство класса, т.к. он часто нужен
    protected consentButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.consentButton = this.page.getByRole('button',{ name: 'Consent', exact: true });
    
    // МАГИЯ PLAYWRIGHT: Регистрируем обработчик один раз в конструкторе
    // Как только этот элемент появится в DOM и станет видимым,
    // Playwright приостановит тест, выполнит этот код, и продолжит тест.
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


// export default class BasePage {
//     protected page: Page;

//     constructor(page: Page) {
//         this.page = page;
//     }

//     async navigate(url: string) {
//         await this.page.goto(url);
//         await this.handleConsentPopup();
//     }

//     async handleConsentPopup() {
//         // button Locator
//         const consentButton = this.page.getByRole('button', { name: 'Consent', exact: true });

//         // Короткий таймаут, чтобы не ждать долго, если поп-апа нет
//         if (await consentButton.isVisible({ timeout: 5000 })) {
//             await consentButton.click();
//             //ожидание исчезновения поп-апа
//             await consentButton.waitFor({ state: "hidden" });
//         }
//     }
// }