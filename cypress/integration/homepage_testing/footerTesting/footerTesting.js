/// <reference types="cypress"/>

// =============================================================================
// STEP SETUP
// =============================================================================


// Imports =====================================================================
import { Given } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../support/pageClasses/HomePage"

// Constants ===================================================================
const homepage = new HomePage()


// =============================================================================
// STEP DEFINITION
// =============================================================================


// Clicking on <btnName> button opens <btnPage> page ===========================
Given('I click on footer button named {string}', function(btnName){
    homepage.getButtonFooterByName(btnName).click()
})
