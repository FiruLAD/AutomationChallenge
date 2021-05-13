import {t, Selector } from 'testcafe';

export default class cartPage {
    constructor () {
        this.checkoutButton = Selector('#checkout');
        this.nameType = Selector('#first-name');
        this.lastNameType = Selector('#last-name');
        this.postalCodeType = Selector('#postal-code');
        this.continueButton = Selector('#continue');
        this.finishButton = Selector('#finish');
        this.orderfinishBanner = Selector('.complete-header');
    }


    async finishOrder(name, lastname, postalcode) {
        await t
              .click(this.checkoutButton)
              .typeText(this.nameType, name)
              .typeText(this.lastNameType, lastname)
              .typeText(this.postalCodeType, postalcode)
              .click(this.continueButton)
              .click(this.finishButton)
              .expect(this.orderfinishBanner.innerText).eql('THANK YOU FOR YOUR ORDER');
    }


}