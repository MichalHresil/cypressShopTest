/// <reference types="cypress"/>

import { Given, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../support/pageClasses/HomePage"

const homepage = new HomePage()

//background

Given('Opening Eshop site url', function(){
    cy.fixture("URL").then(function(url) {
        this.url = url
        cy.visit(this.url.homeUrl)
    })
})

Then('Should be on Eshop site', function(){
    cy.url().should("deep.equal", this.url.homeUrl)
})

//scenario 1
Given('Clicking on page logo',function(){
    homepage.getNavLogo().eq(0).click()
})

Then('Successfull redirect on home page',function(){
    cy.url().should("deep.equal", this.url.homeUrl)
})

//scenario outline
Given('Clicking on button named {string}', function(btnName){
    homepage.getButtonNavBarByName(btnName).click()
})

Then('Successfull redirect on {string}', function(url){
    cy.url().should("deep.equal", url)
})

//cart scenario
Given('Clicking on button with cart icon', function(){
    homepage.getCartButtonNavBar().click()
})

Then('Successfull redirect on cart page', function(){
    cy.url().should("deep.equal", "http://uiautomation.domain.local/cart/")
})