class StorePage {
    getAllProducts() {
        return cy.get(".products li")
    }

    getAllProductCategories(){
        return cy.get(".ast-woo-product-category")
    }

    getPriceSelect() {
        return cy.get('select.orderby')
    }

    inputMinFilter(number) {
        cy.get("#min_price").type(`{selectAll}{del}${number}{enter}`, { force: true })
    }

    inputMaxFilter(number) {
        cy.get("#max_price").type(`{selectAll}{del}${number}{enter}`, { force: true })
    }

    getNoItemsFoundNotice() {
        return cy.get(".woocommerce-info")
    }

    getAccessoriesBtn(){
        cy.get(".product-categories li a").eq(0)
    }

    checkProductsFilter(minVal, maxVal) {

        var num

        cy.get(".products li .price").each(($el) => {


            const childr = $el.children()

            if (childr.length === 1) {
                num = parseInt(childr.text().replace(/\D+/g, ""))
            }
            else if (childr.length === 2) {
                if ($el.text().includes("–")) {
                    num = parseInt(childr.eq(0).text().replace(/\D+/g, ""))
                }
                else {
                    num = parseInt(childr.eq(1).text().replace(/\D+/g, ""))
                }
            }

            expect(num).to.be.most(parseInt(maxVal)).and.least(parseInt(minVal))



        })


    }
}

export default StorePage