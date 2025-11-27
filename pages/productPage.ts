class ProductPage {
    page: any;
    constructor( page: any ) {
        this.page = page;
    };

    locators = {
        getCategories: () => this.page.locator('[data-parent="#accordian"]')
    };

    async getCategoriesText() {
        return await this.locators
            .getCategories()
            .allInnerTexts();
    }
}

export default ProductPage;
