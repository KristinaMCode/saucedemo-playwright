import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../pages/InventoryPage';
import { LoginPage } from '../../pages/LoginPage';
import { PATH, USERS, TEXT } from '../../test-data/testData';
import { CartPage } from '../../pages/CartPage';
let loginPage: LoginPage;
let inventoryPage: InventoryPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.goto();
    await loginPage.login(USERS.standard, process.env.SAUCE_PASSWORD!);
    await expect(page).toHaveURL(PATH.inventory);

});

test('header is displayed after login', async ({ page }) => {
    await expect(inventoryPage.logoTitle).toHaveText(TEXT.logo);
    await expect(inventoryPage.headerMenu).toBeVisible();
    await expect(inventoryPage.cartLink).toBeVisible();
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

const listOfItems= [
    {name:'2', items:[TEXT.backpack, TEXT.bikeLight] , numberOfItems: '2'},
    
];

for(const data of listOfItems){
test(`User puts ${data.name} items in a cart`, async ({ page }) => {
    const cartPage = new CartPage(page);
    await inventoryPage.addMoreItemsToCart(data.items);
    await expect(inventoryPage.cartBadge).toHaveText(data.numberOfItems);
    await inventoryPage.openCart();
    await expect(cartPage.cartTitle).toHaveText(TEXT.cartTitle);
    await expect(cartPage.inventoryItem).toHaveText(data.items);
    await expect(cartPage.cartBadge).toHaveText(data.numberOfItems);
});
}