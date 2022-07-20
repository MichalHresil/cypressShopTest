/// <reference types="cypress"/>

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../support/pageClasses/HomePage"

const homepage = new HomePage()

//background
Given('Opening CN Eshop home url', function(){
    cy.fixture("URL").then(function(url) {
        this.url = url
        cy.visit(this.url.homeUrl)
    })
})
Then('Should be on Eshop home page', function(){
    cy.url().should("deep.equal", this.url.homeUrl)
})

//scenario outline
Given('Clicking on button named {string}', function(btnName){
    homepage.getButtonFooterByName(btnName).click()
})

Then('Successful redirect on {string}', function(url){
    cy.url().should("deep.equal", url)
})