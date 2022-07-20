Feature: Checkout form testing

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
        And Invalid card number is provided
        And Clicking on place order button
        Then Error message should be visible


    @ValidCardInfoAndValidation
    Scenario: Valid form input  and valid payment info plus order summary page testing
        When Valid form data provided
        And Valid card number is provided
        And Clicking on place order button
        And Successful redirect to order summary
        Then Validate data provided by order summary