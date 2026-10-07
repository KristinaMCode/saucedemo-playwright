import { HeaderPage } from './HeaderPage';
import { PATH } from '../test-data/testData';

export class InventoryPage extends HeaderPage {
    readonly path = PATH.inventory;

    async addToCart(item: string) {
        item = item.replaceAll(" ", "-").toLowerCase();
        await this.page.locator('#add-to-cart-' + item).click();
    }
    async addMoreItemsToCart(items: string[]) {
        for (const item of items) {
            await this.addToCart(item);
        }

    }

    async removeFromCart(item: string) {
        item = item.replaceAll(" ", "-").toLowerCase();
        await this.page.getByTestId('remove-' + item).click();
    }

}
