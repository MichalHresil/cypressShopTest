/// <reference types="cypress"/>

import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps"
import CheckoutPage from "../../../support/pageClasses/CheckoutPage"
import HomePage from "../../../support/pageClasses/HomePage"
import CartPage from "../../../support/pageClasses/CartPage"
import 'cypress-iframe'

const homepage = new HomePage()
const checkoutpage = new CheckoutPage()
const cartpage = new CartPage()

//background
Given('Visit main page', function(){
    cy.fixture("URL").then(function(url){
        this.url = url
        cy.visit(this.url.homeUrl)
    })

    cy.fixture("cartItems").then(function(obj) {
        this.items = obj.items
    })
})

And('Adding item to the cart', function(){
    homepage.addItemToCartHomepage(this.items[0].name, this.items[0].quantity)
    homepage.getCartButtonNavBar().click({force:true})
})

And('Proceeding to checkout', function(){
    cartpage.getCheckoutButton().click({force:true})
})

Then('Successfull redirect to checkout page', function(){
    cy.url().should("deep.equal", this.url.checkoutUrl)
})


//Selecting different address opens another form
When('Checking the different address button', function(){
    checkoutpage.getDiffAddressCheckBox().check().should("be.checked")
})

Then('Second address form should be visible', function(){
    checkoutpage.getShippingAddressInput().should("be.visible")
})

//login form show
When('Clicking on button with text click here to login', function(){
    checkoutpage.getLoginInputUsername().should("not.be.visible")
    checkoutpage.getLoginElement().click()
    
})

Then('Login form should be visible', function(){
    checkoutpage.getLoginInputUsername().should("be.visible")
})

//Valid checkout form input provided but with invalid card info

When('Valid form data provided', function(){
    checkoutpage.fillForm()
})

And('Invalid card number is provided', function(){
    cy.frameLoaded('iframe[name="__privateStripeFrame7187"]')
    cy.iframe().find("input").eq(0).type("121212121")
})

Then('Error message should be visible', function(){

})