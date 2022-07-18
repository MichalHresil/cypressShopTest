Feature: Validating various functions of the cart page

    Validating, if all elements on cart page are handeled corectly and if it is 
    possible to proceed to checkout

    Background: Load main page and testing data from json
        Given Visit main page
        Then Load data

    @checkoutTest
    Scenario: Put one item in cart and proceed checkout
        Given Put one item into cart
        When Validate the item is present in cart
        And Enter nonexistent coupon code
        And Validate nonexistent coupon is handeled
        And Clicking on button to proceed to checkout
        Then Successfull redirect to checkout form