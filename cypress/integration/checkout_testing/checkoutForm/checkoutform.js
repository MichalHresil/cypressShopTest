/// <reference types="cypress"/>
///<reference types="cypress-iframe" />

// =============================================================================
// STEPS SETUP
// =============================================================================

// Imports =====================================================================
import { Then, And, When } from "cypress-cucumber-preprocessor/steps"
import CheckoutPage from "../../../support/pageClasses/CheckoutPage"
import 'cypress-iframe'

// Constants ===================================================================
const checkoutpage = new CheckoutPage()


// =============================================================================
// STEP DEFINITIONS
// =============================================================================


// Selecting different address opens another form ==============================
When('I check the different address button', function () {
    checkoutpage.getDiffAddressCheckBox().check().should("be.checked")
})

Then('I should see second address form', function () {
    checkoutpage.getShippingAddressInput().should("be.visible")
})

// Show login form =============================================================
When("I click on button with text \'Click here to login\'", function () {
    checkoutpage.getLoginInputUsername().should("not.be.visible")
    checkoutpage.getLoginElement().click()

})

Then('I should see login form', function () {
    checkoutpage.getLoginInputUsername().should("be.visible")
})

// Valid checkout form input provided but with invalid payment info ===============
When('I fill order form with data', function (dataTable) {
    checkoutpage.fillForm(dataTable)
})

And('I fill payment form with data', function (dataTable) {
    checkoutpage.fillCard(dataTable)
})

And('I click on the button with text \'place order\'', function () {
    checkoutpage.getPlaceOrderBtn().click()
})

Then('I should see error message under payment form', function () {
    checkoutpage.getPaymentErrorBox().should("be.visible")
    checkoutpage.getPaymentErrorBox().should("contain.text", "The card number is not a valid credit card number.")
})

// Valid form input  and valid payment info plus order summary page testing =======
And('I should be redirected to order summary', function () {
    checkoutpage.getCheckoutDiv().should("be.visible")
})

Then('I validate data provided by order summary', function () {
    var subtotal
    var shipping
    var total
    var prices = 0

    checkoutpage.getCheckoutDiv().should("contain.text", "Thank you. Your order has been received.")

    cy.get("tfoot th").each(($el) => {
        const text = $el.text()
        if (text.includes("Subtotal")) {
            subtotal = parseInt($el.next().text().replace(/^\D+/g, ""))
        }
        else if (text.includes("Shipping")) {
            shipping = parseInt($el.next().text().replace(/^\D+/g, ""))
        }
        else if (text.includes("Total")) {
            total = parseInt($el.next().text().replace(/^\D+/g, ""))
        }
    })

    checkoutpage.getAllItemPriceElements().each(($el) => {
        prices += parseInt($el.text().replace(/^\D+/g, ""))
        expect(prices).to.eql(subtotal)
        expect(subtotal + shipping).to.eql(total)

        checkoutpage.getTotalPriceOverviewElement().then((totalP) => {
            const totalprice = parseInt(totalP.text().replace(/^\D+/g, ""))
            expect(totalprice).to.eql(total)
        })
    })




})

// Testing form invalid data ===================================================
When('Invalid data provided to form', function(dataTable){
    checkoutpage.fillForm(dataTable)
})

Then('I should see error message about {string} with data-id {string} above form', function(errname,err){
    cy.get(`.woocommerce-error li[data-id='${err}']`).should("exist").and("be.visible")
})