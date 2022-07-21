/// <reference types="cypress"/>

// =============================================================================
// STEPS SETUP
// =============================================================================


// Imports =====================================================================
import { Given, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../support/pageClasses/HomePage"

// Constants ===================================================================
const homepage = new HomePage()


// =============================================================================
// STEPS DEFINITION
// =============================================================================



// Clicking on logo opens homepage =============================================
Given('I click on E-shop page logo',function(){
    homepage.getNavLogo().eq(0).click()
})


// Clicking on <btnName> button opens <btnPage> page ===========================
Given('I click on button named {string}', function(btnName){
    homepage.getButtonNavBarByName(btnName).click()
})


// Clicking on Cart button opens shopping cart page ============================
Given('I click on cart button', function(){
    homepage.getCartButtonNavBar().click({force:true})
})
