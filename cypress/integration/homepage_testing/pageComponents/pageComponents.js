/// <reference types="cypress"/>

import { Given, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../support/pageClasses/HomePage"

const homepage = new HomePage()

//background
Given('Opening Eshop url', function(){
    cy.fixture("URL").then(function(url) {
        this.url = url
        cy.visit(this.url.homeUrl)
    })
})

Then('Should be on Eshop url', function(){
    cy.url().should("deep.equal", this.url.homeUrl)
})  


//clicking on go shopping 
Given('Clicking on go shopping button', function(){
    homepage.getGoShoppingBtn().click()
})

Then('Successfull redirect to store page', function(){
    cy.url().should("deep.equal", "http://uiautomation.domain.local/store/")
})

//scenario outline 
Given('Clicking on {string}. element named {string}', function(child, elName){
    homepage.getProductElementByChild(child).click()
})

Then('Successfull redirect to {string}', function(url){
    cy.url().should("deep.equal", url)
})

