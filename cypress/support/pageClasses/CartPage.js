class CartPage{
    getAllSubPricesFromCart(){
        return cy.get('.shop_table tbody .product-subtotal')
    }

    getCartSubtotal(){
        return cy.get('.shop_table tbody .cart-subtotal')
    }

    getCouponInput(){
        return cy.get('#coupon_code')
    }

    getCouponButton(){
        return cy.get('.coupon button')
    }

    getCouponError(){
        return cy.get(".woocommerce-error")
    }

    getCheckoutButton(){
        return cy.get(".checkout-button")
    }
}

export default CartPage