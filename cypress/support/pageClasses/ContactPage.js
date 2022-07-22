class ContactPage {

    getErrorByInput(err) {
        switch (err) {
            case "name":
                return cy.get("#wpforms-12-field_0-error")
            case "email":
                return cy.get("#wpforms-12-field_4-error")
            case "message":
                return cy.get("#wpforms-12-field_2-error")
        }
    }

    getSubmitButton() {
        return cy.get('button[type="submit"]')
    }

    fillContactForm(dataTable) {
        const table = dataTable.rawTable
        
        cy.get(`input[placeholder="NAME"]`).type(table[1][0])
        cy.get(`input[placeholder="SUBJECT"]`).type(table[1][1])
        cy.get(`input[placeholder="EMAIL"]`).type(table[1][2])
        cy.get(`textarea[placeholder="MESSAGE"]`).type(table[1][3])
    }

}

export default ContactPage