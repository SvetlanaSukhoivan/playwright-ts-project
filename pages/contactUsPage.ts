class ContactUsPage {
    page: any;
    constructor( page: any ) {
        this.page = page;
    };

    locators = {
        getInputFieldName: () => this.page.getByPlaceholder('Name'),
        getInputFieldEmail: () => this.page.locator('input[data-qa="email"]'),
        getInputFieldMessage: () => this.page.locator('#message'),
        getSubmitButton: () => this.page.locator('input[data-qa="submit-button"]'),
        getSuccessSubmissionMessage: () => this.page.locator('.contact-form .status')
    };

    async fillNameField( name: any ) {
        await this.locators.getInputFieldName().fill(name);
        return this;
    };

    async fillEmailField( email: any ) {
        await this.locators.getInputFieldEmail().fill(email);
        return this;
    };

    async fillMessageField( message: any ) {
        await this.locators.getInputFieldMessage().fill(message);
        return this;
    };
    
    async acceptConfirmationPopup() {
        this.page.on('dialog', async (alert: { accept: () => any; }) => await alert.accept());
    };

    async clickSubmitButton() {
        this.locators.getSubmitButton().click();
        return this;
    };
}

export default ContactUsPage;

