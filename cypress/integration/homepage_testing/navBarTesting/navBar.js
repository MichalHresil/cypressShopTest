/// <reference types="cypress"/>

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../support/pageClasses/HomePage"

const homepage = new HomePage()

//scenario 1
Given('Clicking on page logo',function(){
    homepage.getNavLogo().eq(0).click()
})

Then('Successfull redirect on home page',function(){
    cy.url().should("deep.equal", this.url.homeUrl)
})

//scenario 2
Given('Clicking on button named {string}', function(btnName){
    homepage.getButtonNavBarByName(btnName).click()
})

Then('Successfull redirect on {string}', function(url){
    cy.url().should("deep.equal", url)
})

