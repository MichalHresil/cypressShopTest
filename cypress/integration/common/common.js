/// <reference types="cypress"/>

// =============================================================================
// SHARED STEPS SETUP
// =============================================================================

// Imports =====================================================================
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import CartPage from "../../support/pageClasses/CartPage"
import HomePage from "../../support/pageClasses/HomePage"

// Constants ===================================================================
const homepage = new HomePage()
const cartpage = new CartPage()

// =============================================================================
// STEP DEFINITIONS
// =============================================================================


// Visiting page ===============================================================
Given('I navigate to {string} page', function (pageStr) {
    cy.fixture("URL").then(function (url) {
        this.url = url
        switch (pageStr.toLowerCase()) {
            case "main":
                cy.visit(this.url.main)
                break
            case "store":
                cy.visit(this.url.store)
                break
            case "cart":
                cy.visit(this.url.cart)
                break
            case "checkout":
                cy.visit(this.url.checkout)
                break
            case "accessories":
                cy.visit(this.url.accessories)
                break
        }
    })
    
})

// Loading data ================================================================
And('I load data {string}', function (data) {
    cy.fixture(data).then(function (obj) {
        this.items = obj.items
    })
})

// Should be on page ===========================================================
Then('I should be on {string} page', function (pageStr) {
    switch (pageStr) {
        case "main":
            cy.url().should("deep.equal", this.url.main)
            break
        case "store":
            cy.url().should("deep.equal", this.url.store)
            break
        case "cart":
            cy.url().should("deep.equal", this.url.cart)
            break
        case "checkout":
            cy.url().should("deep.equal", this.url.checkout)
            break
        case "accessories":
            cy.url().should("deep.equal", this.url.accessories)
            break
    }
})

// Put one item to cart ========================================================
And('I put one item to cart', function () {
    homepage.addItemToCartHomepage(this.items[0].name, this.items[0].quantity)
})

// Validate item presence ======================================================
When('I validate the item is present in cart', function(){
    homepage.getCartButtonNavBar().click({force:true})
    cartpage.getAllSubPricesFromCart().should("have.length", 1)
})

// Click on proceed to checkout ================================================
And('I click on proceed to checkout button', function(){
    cartpage.getCheckoutButton().click({force: true})
})


