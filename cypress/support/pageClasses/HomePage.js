class HomePage {
    getNavLogo(){
        return cy.get('div.site-header-section-left a')
    }

    getButtonNavBarByName(name){
        return cy.get('.main-navigation .menu-item').contains(name)
    }
    getCartButtonNavBar(){
        return cy.get(".ast-site-header-cart-li ")
    }
}

export default HomePage