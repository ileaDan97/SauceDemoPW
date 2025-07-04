import {expect, Locator, Page} from "@playwright/test";

export class ProductsPage {
    private readonly page: Page


    constructor(page: Page) {
        this.page = page

    }

    selectProductFromProductsPage = async (product: string) => {
        await this.page.getByText(product).click()
    }

}