import {Locator, Page} from "@playwright/test";
import {Constants} from "../utils/Constants";

export class LoginPage {
    readonly page:Page;
    private readonly loginUsername: Locator;
    private readonly loginPassword: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginUsername = page.locator("#user-name")
        this.loginPassword = page.locator("#password")
        this.loginButton = page.locator("#login-button")

    }
     navigateToPage = async()=> {
        await this.page.goto(Constants.BASE_URL)
    }

    performLogin = async (username: string, password: string): Promise<void> => {
        await this.loginUsername.fill(username);
        await this.loginPassword.fill(password);
        await this.loginButton.click()
    }

}