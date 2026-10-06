import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export abstract class HeaderPage extends BasePage {
    readonly logoTitle: Locator;
    readonly headerMenu: Locator;
    readonly cartLink: Locator;
    readonly cartBadge : Locator;

    constructor(page: Page) {
        super(page);
        this.logoTitle = page.locator('.app_logo');
        this.headerMenu = page.locator('#react-burger-menu-btn');
        this.cartLink = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async openCart(): Promise<void> {
      await  this.cartLink.click();
    }

}