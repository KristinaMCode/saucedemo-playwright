import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { USERS,TEXT,PATH } from '../test-data/testData'; 

test('valid login', async ({page}) => {
   const loginPage = new LoginPage(page);
   const inventoryPage = new InventoryPage(page);
   await loginPage.goto();
   await loginPage.login(USERS.standard,process.env.SAUCE_PASSWORD!);
   await expect(page).toHaveURL(PATH.inventory);
   await expect(inventoryPage.appLogo).toHaveText(TEXT.logo);

});

test('valid Swag Labs first page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.locator('.login_logo')).toHaveText('Swag Labs');
    await expect(page.getByTestId('username')).toBeVisible();
    await expect(page.getByTestId('password')).toBeVisible();
    await expect(page.getByTestId('username')).toHaveAttribute('placeholder', 'Username');
    await expect(page.getByTestId('login-button')).toBeVisible();

});