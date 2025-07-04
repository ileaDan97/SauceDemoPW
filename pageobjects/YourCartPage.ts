import {Locator, Page} from "@playwright/test";

export class YourCartPage{
    private readonly page:Page
    private readonly checkOutButton:Locator

    constructor(page:Page){
        this.page = page
        this.checkOutButton = this.page.locator("#checkout")
    }

    clickOnCheckoutButton = async () => {
        await this.checkOutButton.click()
    }

}