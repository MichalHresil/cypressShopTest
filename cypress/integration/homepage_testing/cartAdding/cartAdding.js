/// <reference types="cypress"/>

import { Given, Then, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../support/pageClasses/HomePage"

const homepage = new HomePage()

//product picking 

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

When("Put all the items from json into the cart", function(){
    this.items.forEach(item => {
        homepage.addItemToCartHomepage(item.name, item.quantity)
    });
})

And('Validate that all items are present in cart', function(){
    homepage.getCartButtonNavBar().click()
})

Then('Validate if total price is equal to sum of prices', function(){

})