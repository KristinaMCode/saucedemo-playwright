import { HeaderPage } from './HeaderPage';
import { PATH } from '../test-data/testData';

export class InventoryPage extends HeaderPage {
readonly path = PATH.inventory;

    async addToCart(item: string) {
        item = item.replaceAll(" ", "-").toLowerCase();
        await this.page.locator('#add-to-cart-' + item).click();
    }


}
