/// <reference types="cypress"/>

// =============================================================================
// SHARED STEPS SETUP
// =============================================================================

// Imports =====================================================================
import { defineStep } from "cypress-cucumber-preprocessor/steps"
import CartPage from "../../support/pageClasses/CartPage"
import HomePage from "../../support/pageClasses/HomePage"

// Constants ===================================================================
const homepage = new HomePage()
const cartpage = new CartPage()


// =============================================================================
// SHARED STEP DEFINITIONS
// =============================================================================


// Visiting page ===============================================================
defineStep('I navigate to {string} page', function (pageStr) {
    cy.fixture("URL").then(function (url) {
        this.url = url
        cy.visit(this.url[pageStr.toLowerCase()])
    })

})

// Loading data ================================================================
defineStep('I load data {string}', function (data) {
    cy.fixture(data).then(function (obj) {
        this.items = obj.items
    })
})

// Should be on page ===========================================================
defineStep('I should be on {string} page', function (pageStr) {
    cy.url().should("deep.equal", this.url[pageStr.toLowerCase()])
})

// Put one item to cart ========================================================
defineStep('I put one item to cart', function () {
    homepage.addItemToCartHomepage(this.items[0].name, this.items[0].quantity)
})

// Validate item presence ======================================================
defineStep('I validate the item is present in cart', function () {
    homepage.getCartButtonNavBar().click({ force: true })
    cartpage.getAllSubPricesFromCart().should("have.length", 1)
})

// Click on proceed to checkout ================================================
defineStep('I click on proceed to checkout button', function () {
    cartpage.getCheckoutButton().click({ force: true })
})


