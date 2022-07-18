class CheckoutPage{
    getDiffAddressCheckBox(){
        return cy.get('input#ship-to-different-address-checkbox')
    }

    getShippingAddressInput(){
        return cy.get("#shipping_first_name")
    }

    getLoginElement(){
        return cy.get("a.showlogin")
    }

    getLoginInputUsername(){
        return cy.get("#username")
    }

    getCardErrorMessage(){
        return cy.get(".woocommerce_error")
    }


    fillForm(){

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

        for(var i = 0; i < form.length; i++){
            cy.get(form[i]).type(data[i])
        }

    }
}

export default CheckoutPage