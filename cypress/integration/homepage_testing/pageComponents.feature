Feature: Test suite - Page components testing

    Test of main home page elements

    Background: Opening CN Eshop main page
        Given I navigate to "main" page
        And I load data "cartItems"
        Then I should be on "main" page

    @clickGoShoppingButton
    Scenario: Click on Go shopping button open store page
        Given I click on 'Go shopping' button
        Then I should be on "store" page

    @clickElement
    Scenario Outline: Clicking on <elName> element opens store <elName> page
        Given I click on category item called "<elName>"
        Then I should be on "<page>" page

        Examples:
            | elName         | page        |
            | Accessories    | accessories |
            | Men products   | men         |
            | Women products | women       |

    @cartTest
    Scenario: Put all json provided items into the cart
        Given I put all the items from json into the cart
        And I validate that all items are present in cart
        Then I validate if total price is equal to sum of prices

