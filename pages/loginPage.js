import {t, Selector } from 'testcafe';

export default class loginPage {
    constructor () {
        this.userName = Selector('#user-name');
        this.passWord = Selector('#password');
        this.loginButton = Selector('#login-button');
        this.productsHeader = Selector('#header_container > div.header_secondary_container > span');
        this.loginInvalidMessage = Selector('#login_button_container > div > form > div.error-message-container.error > h3')
    }


    async login(user, password) {
        await t
              .typeText(this.userName, user)
              .typeText(this.passWord, password)
              .click(this.loginButton)
              .expect(this.productsHeader.innerText).eql('PRODUCTS');
    }

     async loginErrorMessage() {
                 await t
                       .expect(this.loginInvalidMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service');
             }

}