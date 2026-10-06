import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../pages/InventoryPage';
import { LoginPage } from '../../pages/LoginPage';
import { PATH, USERS, TEXT } from '../../test-data/testData';
import { CartPage } from '../../pages/CartPage';
let loginPage : LoginPage;
let inventoryPage : InventoryPage;

test.beforeEach(async ({ page }) => {
   loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.goto();
    await loginPage.login(USERS.standard, process.env.SAUCE_PASSWORD!);
    await expect(page).toHaveURL(PATH.inventory);

});

test('User put an item in a cart', async ({ page }) => {
    const cartPage = new CartPage(page);
    await inventoryPage.addToCart(TEXT.backpack);
    await expect(inventoryPage.cartBadge).toHaveText('1');
    await inventoryPage.openCart();
    await expect(cartPage.cartTitle).toHaveText(TEXT.cartTitle);
    await expect(cartPage.inventoryItem).toHaveText(TEXT.backpack);
    await expect(cartPage.cartBadge).toHaveText('1');
});