/// <reference types="cypress"/>
///<reference types="cypress-iframe" />

import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps"
import CheckoutPage from "../../../support/pageClasses/CheckoutPage"
import HomePage from "../../../support/pageClasses/HomePage"
import CartPage from "../../../support/pageClasses/CartPage"
import 'cypress-iframe'

const homepage = new HomePage()
const checkoutpage = new CheckoutPage()
const cartpage = new CartPage()

//background
Given('Visit main page', function () {
    cy.fixture("URL").then(function (url) {
        this.url = url
        cy.visit(this.url.homeUrl)
    })

    cy.fixture("cartItems").then(function (obj) {
        this.items = obj.items
    })
})

And('Adding item to the cart', function () {
    homepage.addItemToCartHomepage(this.items[0].name, this.items[0].quantity)
    homepage.getCartButtonNavBar().click({ force: true })
})

And('Proceeding to checkout', function () {
    cartpage.getCheckoutButton().click({ force: true })
})

Then('Successful redirect to checkout page', function () {
    cy.url().should("deep.equal", this.url.checkoutUrl)
})


//Selecting different address opens another form
When('Checking the different address button', function () {
    checkoutpage.getDiffAddressCheckBox().check().should("be.checked")
})

Then('Second address form should be visible', function () {
    checkoutpage.getShippingAddressInput().should("be.visible")
})

//login form show
When('Clicking on button with text click here to login', function () {
    checkoutpage.getLoginInputUsername().should("not.be.visible")
    checkoutpage.getLoginElement().click()

})

Then('Login form should be visible', function () {
    checkoutpage.getLoginInputUsername().should("be.visible")
})

//Valid checkout form input provided but with invalid card info

When('Valid form data provided', function () {
    checkoutpage.fillForm()
})

And('Invalid card number is provided', function () {
    checkoutpage.fillCard(false)
})

And('Clicking on place order button', function () {
    checkoutpage.getPlaceOrderBtn().click()
})

Then('Error message should be visible', function () {
    checkoutpage.getPaymentErrorBox().should("be.visible")
    checkoutpage.getPaymentErrorBox().should("contain.text", "The card number is not a valid credit card number.")
})

//Valid form input  and valid payment info plus order summary page testing

And('Valid card number is provided', function () {
    checkoutpage.fillCard(true)
})

And('Successful redirect to order summary', function () {
    checkoutpage.getCheckoutDiv().should("be.visible")
})

Then('Validate data provided by order summary', function () {
    var subtotal
    var shipping
    var total
    var prices = 0

    checkoutpage.getCheckoutDiv().should("contain.text", "Thank you. Your order has been received.")

    cy.get("tfoot th").each(($el, index, $list) => {
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

    checkoutpage.getAllItemPriceElements().each(($el, index, $list) => {
        prices += parseInt($el.text().replace(/^\D+/g, ""))
        expect(prices).to.eql(subtotal)
        expect(subtotal + shipping).to.eql(total)

        checkoutpage.getTotalPriceOverviewElement().then((totalP) => {
            const totalprice = parseInt(totalP.text().replace(/^\D+/g, ""))
            expect(totalprice).to.eql(total)
        })
    })




})