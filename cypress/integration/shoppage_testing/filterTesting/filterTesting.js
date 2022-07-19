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

Given('Setting filter to max value of {string}', function (numStr) {
    cy.get("#max_price").type(`{selectAll}{del}${numStr}{enter}`,{force:true})
})

Then('Only items with price up to {string} should be present', function (numStr) {
    storepage.checkProductsFilter(numStr)
})