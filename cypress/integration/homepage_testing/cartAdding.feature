Feature: Test suite - main page cart testing

    Testing cart adding from main page

    Background: Visit main page and load products from json
        Given Visit main page
        Then Load data


    @cartTest
    Scenario: Put all json provided items into the cart
        When Put all the items from json into the cart 
        And Validate that all items are present in cart
        Then Validate if total price is equal to sum of prices