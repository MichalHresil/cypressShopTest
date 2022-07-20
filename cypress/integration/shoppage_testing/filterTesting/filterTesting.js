/// <reference types="cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

import StorePage from "../../../support/pageClasses/StorePage"

const storepage = new StorePage()

//background
Given('Open store page on store url', function(){
    cy.fixture("URL").then(function(url){
        this.url = url
        cy.visit(this.url.storeUrl)
    })
})

Then('Should be on store url', function(){
    cy.url().should("deep.equal", this.url.storeUrl)
})



//scenario 1

Given('Setting filter to min value of {string} and max value of {string}', function (min,max) {
    storepage.inputMinFilter(min)
    storepage.inputMaxFilter(max)
})

And('Sorting items from high to low price', function(){
    storepage.getPriceSelect().should("exist").select("price-desc",{force:true})
})

Then('Only items with price between {string} and {string} should be present', function (minStr, maxStr) {
    storepage.checkProductsFilter(minStr, maxStr)
})