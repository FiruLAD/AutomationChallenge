import loginPage from '../pages/loginPage'
import productsPage from '../pages/productsPage'
import cartPage from '../pages/cartPage'


import {t, Selector } from 'testcafe';

const loginpage = new loginPage()
const productspage = new productsPage()
const cartpage = new cartPage()




fixture`Automation Challenge `
    .page `https://www.saucedemo.com/`;

test('Login with a valid user', async t => {
    await loginpage.login('standard_user', 'secret_sauce');
});

test('Login with an invalid user', async t => {
    await loginpage.login('invalid_user', 'secret_sauce');
    await loginpage.loginErrorMessage();
});

test('Logout from the home page', async t => {
    await loginpage.login('standard_user', 'secret_sauce');
    await loginpage.productsHeader();
    await productspage.logout();
});

test('Sort products by Price (low to high)', async t => {
    await loginpage.login('standard_user', 'secret_sauce');
    await productspage.orderBy('Price (low to high)');
});

test('Add multiple items to the shopping cart', async t => {
    await loginpage.login('standard_user', 'secret_sauce');
    await productspage.orderBy('Price (low to high)');
    await productspage.productToCart('Sauce Labs Backpack');
    await productspage.productToCart('Sauce Labs Bike Light');
    await productspage.cartClick();
    await productspage.checkProductInCart('Sauce Labs Backpack');
    await productspage.checkProductInCart('Sauce Labs Bike Light');
});

test('Add the specific product ‘Sauce Labs Onesie’ to the shopping cart', async t => {
    await loginpage.login('standard_user', 'secret_sauce');
    await productspage.orderBy('Price (low to high)');
    await productspage.productToCart('Sauce Labs Onesie');
    await productspage.cartClick();
    await productspage.checkProductInCart('Sauce Labs Onesie');
});

test('Complete a purchase', async t => {
    await loginpage.login('standard_user', 'secret_sauce');
    await productspage.orderBy('Price (low to high)');
    await productspage.productToCart('Sauce Labs Onesie');
    await productspage.cartClick();
    await productspage.checkProductInCart('Sauce Labs Onesie');
    await cartpage.finishOrder('Ricardo', 'Castanon', '45019');
});