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

    getCheckoutDiv(){
        return cy.get(".woocommerce-order")
    }

    getItemPrices(){
        return cy.get(".product-total")
    }

    getTotalPriceOverviewElement(){
        return cy.get(".woocommerce-order-overview .woocommerce-Price-amount")
    }

    getAllItemPriceElements(){
        return cy.get("tbody tr td:nth-child(2)")
    }

    fillCard(valid=false) {

        cy.fixture("checkoutData").then(function(data){

            if (valid) {
                cy.iframe(`iframe[title="Secure card number input frame"]`).find("input.InputElement").type(data.validCard.number)
                cy.iframe('iframe[title="Secure expiration date input frame"]').find("input.InputElement").type(data.validCard.expDate)
                cy.iframe('iframe[title="Secure CVC input frame"]').find("input.InputElement").type(data.validCard.cvc)
            }

            else {
                cy.iframe(`iframe[title="Secure card number input frame"]`).find("input.InputElement").type(data.invalidCard.number)
                cy.iframe('iframe[title="Secure expiration date input frame"]').find("input.InputElement").type(data.invalidCard.expDate)
                cy.iframe('iframe[title="Secure CVC input frame"]').find("input.InputElement").type(data.invalidCard.cvc)
            }

        })

    }



    fillForm() {

        const form = [
            "#billing_first_name",
            "#billing_last_name",
            "#billing_address_1",
            "#billing_city",
            "#billing_postcode",
            "#billing_phone",
            "#billing_email"
        ]

        const data = [
            "Karel",
            "Oplatek",
            "Mostní 111",
            "Praha",
            "11122",
            "123456789",
            "opl@mail.cz"
        ]

        for (var i = 0; i < form.length; i++) {
            cy.get(form[i]).type(data[i])
        }

    }
}

export default CheckoutPage