Feature: Test suite - Checkout form testing

    Testing of the checkout form with valid and invalid data


    Background: Adding one item from shop to cart and proceeding to checkout
        Given Visit main page
        And Adding item to the cart
        And Proceeding to checkout
        Then Successful redirect to checkout page


    @differentAddress
    Scenario: Selecting different address opens another form
        When Checking the different address button
        Then Second address form should be visible


    @clickToLogin
    Scenario: Clicking on login shows login form
        When Clicking on button with text click here to login
        Then Login form should be visible


    @InvalidCardInfo
    Scenario: Valid checkout form input provided but with invalid card info
        When Valid form data provided
            | name  | surname | address    | city  | postcode | phone     | email            |
            | Karel | Oplatek | Mostní 111 | Praha | 11155    | 123654789 | oplatek@mail.com |

        And Invalid card information is provided
            | card number      | expiration date | cvc |
            | 4242424242424542 | 08/28           | 000 |

        And Clicking on place order button
        Then Error message should be visible


    @ValidCardInfoAndValidation
    Scenario: Valid form input  and valid payment info plus order summary page testing
        When Valid form data provided
            | name    | surname   | address    | city  | postcode | phone     | email        |
            | Jolanda | Oplatková | Mostní 111 | Praha | 11155    | 456789321 | opl@mail.com |

        And Valid card information is provided
            | card number      | expiration date | cvc |
            | 4242424242424242 | 08/28           | 000 |

        And Clicking on place order button
        And Successful redirect to order summary
        Then Validate data provided by order summary


    @variousInvalidFormData
    Scenario Outline: Invalid data - "<err_type>" provided to form and is handeled
        When Invalid data provided to form
            | name     | surname     | address     | city     | postcode     | phone     | email     |
            | <name_e> | <surname_e> | <address_e> | <city_e> | <postcode_e> | <phone_e> | <email_e> |

        And Valid card information is provided
            | card number      | expiration date | cvc |
            | 4242424242424242 | 08/28           | 000 |

        And Clicking on place order button

        Then Error with data-id "<error_id>" should be visible

        Examples:
            | name_e  | surname_e | address_e    | city_e | postcode_e  | phone_e   | email_e      | error_id          | err_type                    |
            | Jolanda | Oplatková | Mostní 111   | Praha  | 11147021878 | 456789321 | opl@mail.com | billing_postcode  | postcode                    |
            | Jolanda | Oplatková | Mostní 111   | Praha  | 11147       | 456789321 | opl          | billing_email     | email                       |
            | Jolanda | Oplatková | Mostní 111   | Praha  | 11147       | test      | opl@mail.com | billing_phone     | phone number                |
            | Jolanda | Oplatková | ­             | Praha  | 11147       | 123456789 | opl@mail.com | billing_address_1 | address(non breaking space) |
            | Jolanda | Oplatková | e{backspace} | Praha  | 11147       | 123456789 | opl@mail.com | billing_address_1 | empty address               |