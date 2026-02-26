import { Page } from "@playwright/test";
import BasePage from "./basePage";

export default class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    } 

    async loadHomePage(): Promise<void> {
        await this.navigate('/');   
    }
}