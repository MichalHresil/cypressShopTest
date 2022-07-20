class CheckoutPage {
    getDiffAddressCheckBox() {
        return cy.get('input#ship-to-different-address-checkbox')
    }

    getShippingAddressInput() {
        return cy.get("#shipping_first_name")
    }

    getLoginElement() {
        return cy.get("a.showlogin")
    }

    getLoginInputUsername() {
        return cy.get("#username")
    }

    getCardErrorMessage() {
        return cy.get(".woocommerce_error")
    }

    getPlaceOrderBtn() {
        return cy.get("button#place_order")
    }

    getPaymentErrorBox() {
        return cy.get("div.stripe-source-errors")
    }

    getCardNumberInput() {
        return cy.iframe(`iframe[title="Secure card number input frame"]`).find("input.InputElement")
    }

    getCardExpDateInput() {
        return cy.iframe('iframe[title="Secure expiration date input frame"]').find("input.InputElement")
    }

    getCardCvcInput() {
        return cy.iframe('iframe[title="Secure CVC input frame"]').find("input.InputElement")
    }

    getCheckoutDiv() {
        return cy.get(".woocommerce-order")
    }

    getItemPrices() {
        return cy.get(".product-total")
    }

    getTotalPriceOverviewElement() {
        return cy.get(".woocommerce-order-overview .woocommerce-Price-amount")
    }

    getAllItemPriceElements() {
        return cy.get("tbody tr td:nth-child(2)")
    }

    fillCard(dataTable) {

        const table = dataTable.rawTable

        cy.iframe(`iframe[title="Secure card number input frame"]`).find("input.InputElement").type(table[1][0])
        cy.iframe('iframe[title="Secure expiration date input frame"]').find("input.InputElement").type(table[1][1])
        cy.iframe('iframe[title="Secure CVC input frame"]').find("input.InputElement").type(table[1][1])

    }



    fillForm(dataTable) {

        const table = dataTable.rawTable

        const form = [
            "#billing_first_name",
            "#billing_last_name",
            "#billing_address_1",
            "#billing_city",
            "#billing_postcode",
            "#billing_phone",
            "#billing_email"
        ]



        for (var i = 0; i < form.length; i++) {
            cy.get(form[i]).type(table[1][i])
        }

    }
}

export default CheckoutPage