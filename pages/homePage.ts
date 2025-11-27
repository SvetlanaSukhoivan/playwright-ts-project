class HomePage {
    page: any;
    constructor( page: any ) {
        this.page = page;
    };

    async loadHomePage() {
        await this.page.goto('/');
    }
}

export default HomePage;