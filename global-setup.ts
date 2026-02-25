import { chromium } from "@playwright/test";
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const STORAGE_PATH = path.join(__dirname, '.auth', 'storageState.json');

export default async function globalSetup() {
    console.log('🔐 Generating fresh storageState...');

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(`${process.env.BASE_URL}/${process.env.LOGIN_PATH}`);

    const consentButton = page.getByRole('button', { name: 'Consent', exact: true });
    if (await consentButton.isVisible({ timeout: 5000 })) {
        console.log('Pop-up detected. Closing...');
        await consentButton.click();
    }
    
    await page.locator('[data-qa="login-email"]').fill(process.env.EMAIL as string);
    await page.locator('[data-qa="login-password"]').fill(process.env.PASSWORD as string);
    await page.locator('[data-qa="login-button"]').click();

    await page.waitForLoadState('networkidle');
    await Promise.race([
        page.waitForURL(url => !url.toString().includes('/login'), { timeout: 30000 }).catch(() => null),
        page.waitForSelector("//*[@id = 'header']//a[contains(text(),' Logged in as ')]", { timeout: 30000 }).catch(() => null),
    ]);

    console.log('Current URL after login:', page.url());

    await page.context().storageState({ path: STORAGE_PATH });
    console.log(`✅ storageState created at: ${STORAGE_PATH}`);

    await browser.close();
}