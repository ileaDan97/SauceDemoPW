import {Locator, Page} from "@playwright/test";

export class YourInformationCheckoutPage {
    private readonly page: Page
    private readonly firstNameInput: Locator
    private readonly lastNameInput: Locator
    private readonly zipCodeInput: Locator
    private readonly continueButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = this.page.locator("#first-name")
        this.lastNameInput = this.page.locator("#last-name")
        this.zipCodeInput = this.page.locator("#postal-code")
        this.continueButton = this.page.locator("#continue")
    }

    insertFirstNameInput = async (firstName: string) => {
        await this.firstNameInput.fill(firstName);
    }

    insertLastNameInput = async (lastName: string) => {
        await this.lastNameInput.fill(lastName);
    }

    insertZipCodeInput = async (zipCode: string) => {
        await this.zipCodeInput.fill(zipCode);
    }

    clickOnContinueButton = async () => {
        await this.continueButton.click();
    }
}