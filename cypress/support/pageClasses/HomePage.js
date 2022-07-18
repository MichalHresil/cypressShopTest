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

    getButtonFooterByName(name){
        return cy.get('.site-footer-primary-section-1  > aside div section ul ').contains(name)
    }

    getProductElementByChild(child){
        return cy.get(`.products li:nth-child(${child})`)
    }

    getGoShoppingBtn(){
        return cy.get('.wp-block-cover__inner-container > div a')
    }

    homePageBuyItemByName(name){
        return cy.get('.wc-block-grid__products li')
    }


    addItemToCartHomepage(itemName, ammount){
        var index
        var am = ammount || 1
        const name = '.wc-block-grid__products > li .wc-block-grid__product-title'
        const carBtnMainPage = '.wc-block-grid__products li .wp-block-button a'
        const imgLink = ".wc-block-grid__products > li > a"
        const quantityInput = '.quantity input'
        const validForm = '.variations_form'
        const cartButton = '.cart button'
        const select = '.value select'

        cy.get(name).each(($el, i, list)=>{
            const text = $el.text()
    
            if(text === itemName){
                index = i
            }
        })
    
        cy.get(carBtnMainPage).then((buttons)=>{
            const button = buttons.eq(index)
            const btText = button.text()
            if(btText.includes("Add to cart") && am === 1){
                cy.wrap(button).click()
            }
            else if(btText.includes('Select options')){
                cy.wrap(button).click()
                cy.get(select).select(1)
                cy.get(quantityInput).type(`{backspace}${am}`)
                cy.get(validForm).submit()
            }
            else if(btText.includes('Add to cart') && am > 1){
                cy.get(imgLink).then((links)=>{
                    cy.wrap(links.eq(index)).click()
                })
                cy.get(quantityInput).type(`{backspace}${am}`)
                cy.get(cartButton).click()
            }
        })

        cy.fixture("URL").then(function(url) {
            cy.url().then((getUrl)=>{
                if(getUrl !== this.url.HomePage){
                    getNavLogo().click()
                }
            })
        })
    }


}

export default HomePage