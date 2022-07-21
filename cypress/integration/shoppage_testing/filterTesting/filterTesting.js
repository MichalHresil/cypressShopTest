/// <reference types="cypress"/>

// =============================================================================
// STEPS SETUP
// =============================================================================


// Imports =====================================================================
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import StorePage from "../../../support/pageClasses/StorePage"

// Constants ===================================================================
const storepage = new StorePage()


// =============================================================================
// STEP DEFINITIONS
// =============================================================================


// Filtering items =============================================================
Given('I set the filter to in value of {string} and max value of {string}', function (min,max) {
    storepage.inputMinFilter(min)
    storepage.inputMaxFilter(max)
})

And('I sort the items in descending order', function(){
    storepage.getPriceSelect().should("exist").select("price-desc",{force:true})
})

Then('I should only see items with price between {string} and {string}', function (minStr, maxStr) {
    storepage.checkProductsFilter(minStr, maxStr)
})


// Filtering accessories shows only accessory items ============================
Given('I click on filter button with name {string}', function(type){
    cy.get(".product-categories li a").contains(type).click()
})

Then('I should only see items with category type {string}', function(type){

    var validCategories = []

    storepage.getAllProductCategories().then((categories)=>{
        for(var i = 0; i < categories.length; i++){
            if(categories[i].innerText===type){
                validCategories.push(categories[i])
            }
        }
    })

    storepage.getAllProducts().then((products)=>{
        expect(products.length).to.eql(validCategories.length)
    })
})


// Searching for <name> shows only items with word <name> in it ================
Given('I insert the word {string} into search input', function(name){
    storepage.getSearchInput().type(name)
})

And('I click on search button', function(){
    storepage.getSearchBtn().click()
})

Then('I should only see names containing the word {string}', function(name){
    storepage.getAllProductNames().each((el)=>{
        const productName = el.text().toLowerCase()

        expect(productName).to.include(name)
    })
})