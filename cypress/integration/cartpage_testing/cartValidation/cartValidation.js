/// <reference types="cypress"/>

// =============================================================================
// STEPS SETUP
// =============================================================================


// IMPORTS =====================================================================
import { And } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../support/pageClasses/HomePage"
import CartPage from "../../../support/pageClasses/CartPage"

// CONSTANTS ===================================================================
const homepage = new HomePage()
const cartpage = new CartPage()


// =============================================================================
// STEPS DEFINITIONS
// =============================================================================


// Adding one item to cart and proceeding to checkout ==========================

And('I enter nonexistent coupon code', function(){
    cartpage.getCouponInput().type("125478").should("have.value", "125478")
    cartpage.getCouponButton().click()
})

And('I validate that nonexistent coupon is handled', function(){
    cartpage.getCouponError().should("be.visible")
})

