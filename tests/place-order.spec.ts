import {test} from "@playwright/test";
import {PageManager} from "../pageobjects/PageManager";
import {Constants} from "../utils/Constants";

test('Place an order', async ({ page }) => {
    const pageManager = new PageManager(page)
    await pageManager.LoginPage().navigateToPage()
    await pageManager.LoginPage().performLogin(Constants.STANDARD_USER, Constants.PASSWORD);
    await pageManager.ProductsPage().selectProductFromProductsPage('Sauce Labs Backpack')
    await pageManager.ProductDetailsPage().verifyDetailsPageIsDisplayed()
    await pageManager.ProductDetailsPage().clickAddToCartButton()
    await pageManager.ProductDetailsPage().verifyShoppingCartBadeIsDisplayed()
    await pageManager.ProductDetailsPage().clickShoppingCartButton()
    await pageManager.YourCartPage().clickOnCheckoutButton()
    await pageManager.YourInformationCheckoutPage().insertFirstNameInput('firstTestName')
    await pageManager.YourInformationCheckoutPage().insertLastNameInput('lastTestName')
    await pageManager.YourInformationCheckoutPage().insertZipCodeInput('33222')
    await pageManager.YourInformationCheckoutPage().clickOnContinueButton()
    await pageManager.OverviewCheckoutPage().checkProductIsDisplayed()
    await pageManager.OverviewCheckoutPage().checkPaymentIsDisplayed()
    await pageManager.OverviewCheckoutPage().checkShipmentInformationIsDisplayed()
    await pageManager.OverviewCheckoutPage().checkTotalPriceIsDisplayed()
    await pageManager.OverviewCheckoutPage().clickOnFinishButton()
})