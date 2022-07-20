/// <reference types="cypress"/>

import { Given, Then } from "cypress-cucumber-preprocessor/steps"
import CartPage from "../../../support/pageClasses/CartPage"
import HomePage from "../../../support/pageClasses/HomePage"

const homepage = new HomePage()
const cartpage = new CartPage()

//background
Given('Visit main page', function(){
    cy.fixture("URL").then(function(url) {
        this.url = url
        cy.visit(this.url.homeUrl)
    })
})

Then('Should be on Eshop url and load data', function(){
    cy.url().should("deep.equal", this.url.homeUrl)

    cy.fixture("cartItems").then(function(obj) {
        this.items = obj.items
    })
})  


//clicking on go shopping 
Given('Clicking on go shopping button', function(){
    homepage.getGoShoppingBtn().click()
})

Then('Successful redirect to store page', function(){
    cy.url().should("deep.equal", "http://uiautomation.domain.local/store/")
})

//scenario outline 
Given('Clicking on {string}. element named {string}', function(child, elName){
    homepage.getProductElementByChild(child).click()
})

Then('Successful redirect to {string}', function(url){
    cy.url().should("deep.equal", url)
})


//item adding
Given("Put all the items from json into the cart", function(){
    this.items.forEach(item => {
        homepage.addItemToCartHomepage(item.name, item.quantity)
    });
})

And('Validate that all items are present in cart', function(){
    homepage.getCartButtonNavBar().click({force:true})
    cartpage.getAllSubPricesFromCart().should("have.length", 4)
})

Then('Validate if total price is equal to sum of prices', function(){
    var total = 0
    cartpage.getAllSubPricesFromCart().each(($el, index, $list)=>{
        const number = parseInt($el.text().replace(/^\D+/g, ""))
        total += number
    })

   cartpage.getCartSubtotal().then((el)=>{
        var totalCart = parseInt(el.text().replace(/^\D+/g, ""))
        expect(total).to.eql(totalCart)
   })

})
