import {t, Selector } from 'testcafe';

export default class productsPage {
    constructor () {
        this.productsHeader = Selector('.title');
        this.burgerButton = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.loginButton = Selector('#login-button');
        this.sortButton = Selector('.product_sort_container');
        this.activeSortOption = Selector('.active_option');
        this.SauceLabsBackpackCart = Selector('#add-to-cart-sauce-labs-backpack');
        this.SauceLabsBikeLightCart = Selector('#add-to-cart-sauce-labs-bike-light');
        this.SauceLabsBoltTShirtCart = Selector('#add-to-cart-sauce-labs-onesie');
        this.SauceLabsFleeceJacketCart = Selector('#add-to-cart-sauce-labs-fleece-jacket');
        this.SauceLabsOnesieCart = Selector('#add-to-cart-sauce-labs-onesie');
        this.TestallTheThingsCart = Selector('#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)');
        this.cartProductsItems = Selector('#shopping_cart_container');
    }


    async logout() {
        await t
              .click(this.burgerButton)
              .click(this.logoutButton)
              .expect(this.loginButton.exists).ok();
    }

     async orderBy(sort) {
            await t
                  .click(this.sortButton)
                  .click(this.sortButton.child().withText(sort))
                  .expect(this.activeSortOption.innerText).eql(sort.toUpperCase());
                          }

      async cartClick() {
                 await t
                       .click(this.cartProductsItems);
                               }


       async productToCart(product) {

                        switch(product) {
                          case 'Sauce Labs Backpack':
                           await t
                           .click(this.SauceLabsBackpackCart)
                           .expect(this.SauceLabsBackpackCart.exists).notOk();
                            break;
                          case 'Sauce Labs Bike Light':
                          await t
                          .click(this.SauceLabsBikeLightCart)
                          .expect(this.SauceLabsBikeLightCart.exists).notOk();

                            break;
                          case 'Sauce Labs Bolt T-Shirt':
                          await t
                          .click(this.SauceLabsBoltTShirtCart)
                          .expect(this.SauceLabsBoltTShirtCart.exists).notOk();
                            break;
                          case 'Sauce Labs Fleece Jacket':
                          await t
                          .click(this.SauceLabsFleeceJacketCart)
                          .expect(this.SauceLabsFleeceJacketCart.exists).notOk();
                            break;
                          case 'Sauce Labs Onesie':
                          await t
                          .click(this.SauceLabsOnesieCart)
                          .expect(this.SauceLabsOnesieCart.exists).notOk();
                             break;
                          case 'Test.allTheThings() T-Shirt (Red)':
                          await t
                          .click(this.TestallTheThingsCart)
                          .expect(this.TestallTheThingsCart.exists).notOk();
                             break;
                          default:
                            console.log('Product Not Found');
                        }
                                }


  async checkProductInCart(Product) {
            var i;
            var bool = new Boolean(false);
            for (i = 0; i <=6; i++) {

              if((await (Selector('#item_' + i + '_title_link')).withExactText(Product).exists) && bool==false ){
              bool = true
              console.log('Product in Cart')
              break;}}


               if(bool==false){
               console.log('Product NOT in Cart')
               await t.expect(bool).notOk();     }



}

}