import { Page, Locator } from '@playwright/test';
import { HeaderPage } from './HeaderPage';

export class CartPage extends HeaderPage {
    readonly path = '/';
    readonly cartTitle : Locator;
    readonly inventoryItem : Locator;

    constructor(page: Page) {
        super(page);
        this.cartTitle = page.locator('.header_secondary_container');
        this.inventoryItem = page.locator('.inventory_item_name');
    }


}