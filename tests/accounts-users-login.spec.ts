import {test} from "@playwright/test";
import {PageManager} from "../pageobjects/PageManager";
import {Constants} from "../utils/Constants";

test("Perform Login with standard User", async ({page}) => {
    const pageManager = new PageManager(page);
    await pageManager.LoginPage().navigateToPage()
    await pageManager.LoginPage().performLogin(Constants.STANDARD_USER, Constants.PASSWORD);
})

