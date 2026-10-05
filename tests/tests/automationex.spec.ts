import { test, expect } from '@playwright/test';

test('Verify first page', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle('Automation Exercise');
    await expect(page.getByRole('button', { name: 'Test Cases' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'APIs list for practice' })).toBeVisible();
    await expect(page.locator('.shop-menu.pull-right')).toBeVisible();
});

test('verify All products page', async ({ page }) => {
    await page.route(/(googlesyndication|doubleclick|googleadservices)/, route => route.abort());
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: 'Products' }).click();
    await expect(page).toHaveURL('https://automationexercise.com/products');
    await expect(page.locator('.title.text-center')).toHaveText('All Products');
    await page.locator('#search_product').fill('Tshirt');
    await page.locator('#submit_search').click();
    await expect(page.locator('.title.text-center')).toHaveText('Searched Products');
});
