import {Page} from "@playwright/test";
import {LoginPage} from "./LoginPage";
import {ProductsPage} from "./ProductsPage";
import {ProductDetailsPage} from "./ProductDetailsPage";
import {YourCartPage} from "./YourCartPage";
import {YourInformationCheckoutPage} from "./YourInformationCheckoutPage";
import {OverviewCheckoutPage} from "./OverviewCheckoutPage";

export class PageManager {
    private readonly page: Page
    private readonly loginPage: LoginPage
    private readonly productsPage: ProductsPage
    private readonly productDetailsPage: ProductDetailsPage
    private readonly yourCartPage: YourCartPage
    private readonly yourInformationCheckoutPage: YourInformationCheckoutPage
    private readonly overviewCheckoutPage: OverviewCheckoutPage

    constructor(page: Page) {
        this.page = page
        this.loginPage = new LoginPage(this.page)
        this.productsPage = new ProductsPage(this.page)
        this.productDetailsPage = new ProductDetailsPage(this.page)
        this.yourCartPage = new YourCartPage(this.page)
        this.yourInformationCheckoutPage = new YourInformationCheckoutPage(this.page)
        this.overviewCheckoutPage = new OverviewCheckoutPage(this.page)
    }

    LoginPage() {
        return this.loginPage;
    }

    ProductsPage() {
        return this.productsPage;
    }

    ProductDetailsPage() {
        return this.productDetailsPage;
    }

    YourCartPage() {
        return this.yourCartPage;
    }

    YourInformationCheckoutPage() {
        return this.yourInformationCheckoutPage;
    }

    OverviewCheckoutPage() {
        return this.overviewCheckoutPage;
    }
}