import {expect, Locator, Page} from "@playwright/test";

export class ProductDetailsPage {
    private readonly page:Page
    private readonly addToCartButton: Locator;
    private readonly shoppingCartNumberBadge: Locator;
    private readonly shoppingCartButton: Locator;

    constructor(page:Page) {
        this.page = page;
        this.addToCartButton = this.page.locator("#add-to-cart");
        this.shoppingCartNumberBadge = this.page.locator(".shopping_cart_badge");
        this.shoppingCartButton = this.page.locator("#shopping_cart_container");
    }


    verifyDetailsPageIsDisplayed = async () => {
        expect(this.page.url().includes('inventory-item')).toBe(true);
    }

    clickAddToCartButton = async () => {
        await this.addToCartButton.click();
    }

    verifyShoppingCartBadeIsDisplayed = async () => {
        await expect(this.shoppingCartNumberBadge).toBeVisible()
    }

    clickShoppingCartButton = async () => {
        await this.shoppingCartButton.click();
    }
}