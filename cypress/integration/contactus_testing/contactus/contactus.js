/// <reference types="cypress"/>

// =============================================================================
// STEP SETUP
// =============================================================================


// Imports =====================================================================
import { Given, Then, And } from "cypress-cucumber-preprocessor/steps"
import ContactPage from "../../../support/pageClasses/ContactPage"

// Constants ===================================================================
const contacpage = new ContactPage()


// =============================================================================
// STEP DEFINITIONS
// =============================================================================


// Providing invalid data to form and submitting ====================================
Given('I provide data to contact form', function (dataTable) {
    contacpage.fillContactForm(dataTable)
})

And('I click \'SEND MESSAGE\' button', function () {
    contacpage.getSubmitButton().click()
})

Then('I should see error on input named {string}', function (name) {
    contacpage.getErrorByInput(name).should("exist").and("be.visible")
})


// Providing valid data to contact form and submitting =============================
Then('Form should be submitted successfully', function () {
    cy.get('#wpforms-confirmation-12 p')
        .should("exist")
        .and("have.text", "Thanks for contacting us! We will be in touch with you shortly.")
})
