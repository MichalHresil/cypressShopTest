/// <reference types="cypress"/>

// =============================================================================
// STEP SETUP
// =============================================================================

// Imports =====================================================================
import { Given, Then } from "cypress-cucumber-preprocessor/steps"
import CartPage from "../../../support/pageClasses/CartPage"
import HomePage from "../../../support/pageClasses/HomePage"

// Constants ===================================================================
const homepage = new HomePage()
const cartpage = new CartPage()


// =============================================================================
// STEP DEFINITION
// =============================================================================


// Click on Go shopping button open store page =================================
Given('I click on \'Go shopping\' button', function(){
    homepage.getGoShoppingBtn().click()
})

Then('Successful redirect to store page', function(){
    cy.url().should("deep.equal", "http://uiautomation.domain.local/store/")
})


// Clicking on <elName> element opens store <elName> page ======================
Given('I click on category item called {string}', function(elName){
    const name = elName.split(" ")
    homepage.getProductElementByName(name[0]).click()
})


// Put all json provided items into the cart ===================================
Given("I put all the items from json into the cart", function(){
    this.items.forEach(item => {
        homepage.addItemToCartHomepage(item.name, item.quantity)
    });
})

And('I validate that all items are present in cart', function(){
    homepage.getCartButtonNavBar().click({force:true})
    cartpage.getAllSubPricesFromCart().should("have.length", 4)
})

Then('I validate if total price is equal to sum of prices', function(){
    var total = 0
    cartpage.getAllSubPricesFromCart().each(($el, index, $list)=>{
        const number = parseInt($el.text().replace(/\D+/g, ""))
        total += number
    })

   cartpage.getCartSubtotal().then((el)=>{
        var totalCart = parseInt(el.text().replace(/\D+/g, ""))
        expect(total).to.eql(totalCart)
   })

})
