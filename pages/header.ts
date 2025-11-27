import ContactUsPage from "./contactUsPage";
import ProductPage from "./productPage";

class Header {
    page: any;
    constructor( page: any ) {
        this.page = page;
    };

    locators = {
        getHomePageLink: () => this.page.getByText('Home'),
        getProductsLink: () => this.page.getByText('Products'),
        getContactUsLink: () => this.page.getByText('Contact us')
    };

    async clickContactUsLink() {
        await this.locators.getContactUsLink().click();
        return new ContactUsPage(this.page);
    };

    async clickProductLink() {
        await this.locators.getProductsLink().click();
        return new ProductPage(this.page);
    };
}

export default Header;
