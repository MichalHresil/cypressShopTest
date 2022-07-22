Feature: Test suite - testing contact-us page

    Testing of contacting form provided on contact-us page


    Background: Navigate to contact-us page
        Given I navigate to "contact" page
        Then I should be on "contact" page

    @InvalidDataContactForm
    Scenario Outline: Providing invalid <errName> to form and submitting
        Given I provide data to contact form
            | name     | subject | email     | message     |
            | <name_e> | Testing | <email_e> | <message_e> |

        And I click 'SEND MESSAGE' button
        Then I should see error on input named "<errName>"


        Examples:
            | name_e       | email_e      | message_e              | errName |
            | e{backspace} | John@mail.cc | This is a test message | name    |
            | John         | fjaiegjaie   | Test message           | email   |
            | John         | e{backspace} | Test message           | email   |
            | John         | john@mail.cc | e{backspace}           | message |

    @ValidDataContactForm
    Scenario: Providing valid data to contact form and submitting
        Given I provide data to contact form
            | name | subject | email        | message      |
            | John | Testing | john@mail.cc | Test message |

        And I click 'SEND MESSAGE' button
        Then Form should be submitted successfully