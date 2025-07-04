import {expect, Locator, Page} from "@playwright/test";

export class OverviewCheckoutPage {
    private readonly page: Page;
    private readonly productName: Locator
    private readonly paymentInfo: Locator
    private readonly shippingInfo: Locator
    private readonly totalPrice: Locator
    private readonly finishButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.productName = this.page.locator(".inventory_item_name1")
        this.paymentInfo = this.page.locator("[data-test='payment-info-value']")
        this.shippingInfo = this.page.locator("[data-test='shipping-info-value']")
        this.totalPrice = this.page.locator("[data-test='total-label']")
        this.finishButton = this.page.locator("#finish")
    }

    checkProductIsDisplayed = async (): Promise<void> => {
        await expect(this.productName).toBeVisible()
    }

    checkPaymentIsDisplayed = async (): Promise<void> => {
        await expect(this.paymentInfo).toBeVisible()
    }

    checkShipmentInformationIsDisplayed = async (): Promise<void> => {
        await expect(this.shippingInfo).toBeVisible()
    }

    checkTotalPriceIsDisplayed = async (): Promise<void> => {
        await expect(this.totalPrice).toBeVisible()
    }

    clickOnFinishButton = async (): Promise<void> => {
        await this.finishButton.click()
    }
}