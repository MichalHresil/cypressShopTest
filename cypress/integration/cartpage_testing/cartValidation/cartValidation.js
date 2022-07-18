/// <reference types="cypress"/>

import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../support/pageClasses/HomePage"
import CartPage from "../../../support/pageClasses/CartPage"

const homepage = new HomePage()
const cartpage = new CartPage()

//background
Given("Visit main page", function(){
    cy.fixture("URL").then(function(url) {
        this.url = url
        cy.visit(this.url.homeUrl)
    })
})

Then('Load data', function(){
    cy.fixture("cartItems").then(function(obj) {
        this.items = obj.items
    })
})


//cart testing
Given('Put one item into cart', function(){
    homepage.addItemToCartHomepage(this.items[0].name, this.items[0].quantity)
})

When('Validate the item is present in cart', function(){
    homepage.getCartButtonNavBar().click({force:true})
    cartpage.getAllSubPricesFromCart().should("have.length", 1)
})

And('Enter nonexistent coupon code', function(){
    cartpage.getCouponInput().type("125478").should("have.value", "125478")
    cartpage.getCouponButton().click()
})

And('Validate nonexistent coupon is handeled', function(){
    cartpage.getCouponError().should("be.visible")
})

And('Clicking on button to proceed to checkout', function(){
    cartpage.getCheckoutButton().click({force: true})
})

Then('Successfull redirect to checkout form', function(){
    cy.url().should("deep.equal", this.url.checkoutUrl)
})
