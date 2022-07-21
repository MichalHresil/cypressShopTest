Feature: Test suite - validating cart page

    Validating, if all elements on cart page are handled corectly and if it is
    possible to proceed to checkout

    Background: Loading main page and testing if page was loaded correctly
        Given I navigate to "main" page
        And I load data "cartItems"
        Then I should be on "main" page

    @checkoutTest
    Scenario: Adding one item to cart and proceeding to checkout
        Given I put one item to cart
        When I validate the item is present in cart
        And I enter nonexistent coupon code
        And I validate that nonexistent coupon is handled
        And I click on proceed to checkout button
        Then I should be on "checkout" page