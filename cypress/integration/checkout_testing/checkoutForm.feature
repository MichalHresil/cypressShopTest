Feature: Test suite - Checkout form testing

    Testing the checkout form with valid and invalid data


    Background: Adding one item from shop to cart and proceeding to checkout
        Given I navigate to "main" page
        And I load data "cartItems"
        And I put one item to cart
        And I validate the item is present in cart
        And I click on proceed to checkout button
        Then I should be on "checkout" page


    @differentAddress
    Scenario: Checking different address checkbox opens another form
        When I check the different address button
        Then I should see second address form


    @clickToLogin
    Scenario: Clicking on login shows login form
        When I click on button with text 'Click here to login'
        Then I should see login form


    @InvalidCardInfo
    Scenario: Valid checkout form input provided but with invalid card info
        When I fill order form with data
            | name  | surname | address    | city  | postcode | phone     | email            |
            | Karel | Oplatek | Mostní 111 | Praha | 11155    | 123654789 | oplatek@mail.com |

        And I fill payment form with data
            | card number      | expiration date | cvc |
            | 8142756742424562 | 08/28           | 000 |

        And I click on the button with text 'place order'
        Then I should see error message under payment form


    @ValidCardInfoAndValidation
    Scenario: Valid form input  and valid payment info plus order summary page testing
        When I fill order form with data
            | name    | surname   | address    | city  | postcode | phone     | email        |
            | Jolanda | Oplatková | Mostní 111 | Praha | 11155    | 456789321 | opl@mail.com |

        And I fill payment form with data
            | card number      | expiration date | cvc |
            | 4242424242424242 | 08/28           | 000 |

        And I click on the button with text 'place order'
        And I should be redirected to order summary
        Then I validate data provided by order summary


    @variousInvalidFormData
    Scenario Outline: Invalid data - "<err_type>" provided to form and is handled
        When I fill order form with data
            | name     | surname     | address     | city     | postcode     | phone     | email     |
            | <name_e> | <surname_e> | <address_e> | <city_e> | <postcode_e> | <phone_e> | <email_e> |

        And I fill payment form with data
            | card number      | expiration date | cvc |
            | 4242424242424242 | 08/28           | 000 |

        And I click on the button with text 'place order'

        Then I should see error message about "<err_type>" with data-id "<error_id>"

        Examples:
            | name_e  | surname_e | address_e    | city_e | postcode_e  | phone_e   | email_e      | error_id          | err_type                    |
            | Jolanda | Oplatková | Mostní 111   | Praha  | 11147021878 | 456789321 | opl@mail.com | billing_postcode  | postcode                    |
            | Jolanda | Oplatková | Mostní 111   | Praha  | 11147       | 456789321 | opl          | billing_email     | email                       |
            | Jolanda | Oplatková | Mostní 111   | Praha  | 11147       | test      | opl@mail.com | billing_phone     | phone number                |
            | Jolanda | Oplatková | ­            | Praha  | 11147       | 123456789 | opl@mail.com | billing_address_1 | address(non breaking space) |
            | Jolanda | Oplatková | e{backspace} | Praha  | 11147       | 123456789 | opl@mail.com | billing_address_1 | empty address               |


