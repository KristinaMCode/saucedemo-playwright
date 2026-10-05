import { Page, Locator } from '@playwright/test';
export class InventoryPage{
    readonly page:Page;
    readonly appLogo : Locator;

    constructor (page:Page){
        this.page = page;
        this.appLogo = page.locator('.app_logo');
    }

  
}