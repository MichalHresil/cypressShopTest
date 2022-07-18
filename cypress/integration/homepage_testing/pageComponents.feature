Feature: Test suite - home page testing

    Test of main home page elements
    Pre-Condition: open home page

    Background: Opening CN Eshop home page
        Given Visit main page
        Then Should be on Eshop url and load data

    @clickGoShoppingButton
    Scenario: Click on Go shopping button open store page
        Given Clicking on go shopping button
        Then Successfull redirect to store page

    @clickElement
    Scenario Outline: Clicking on <elName> element opens store <elName> page
        Given Clicking on "<child>". element named "<elName>"
        Then Successfull redirect to "<url>"

        Examples:
            | child | elName         | url                                                            |
            | 1     | Accessories    | http://uiautomation.domain.local/product-category/accessories/ |
            | 2     | Men products   | http://uiautomation.domain.local/product-category/men/         |
            | 3     | Women products | http://uiautomation.domain.local/product-category/women/       |

    @cartTest
    Scenario: Put all json provided items into the cart
        Given Put all the items from json into the cart
        And Validate that all items are present in cart
        Then Validate if total price is equal to sum of prices

