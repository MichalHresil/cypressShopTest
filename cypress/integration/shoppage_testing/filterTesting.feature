Feature: Test suite - Store page navigation and filtering

    Testing functionalities of store page, such as searching
    and filtering

    Background: Navigate to store page
        Given I navigate to "store" page
        Then I should be on "store" page

    @filtermaxSet
    Scenario Outline: Setting min value to "<min>" and max value to "<max>"
        Given I set the filter to in value of "<min>" and max value of "<max>"
        And I sort the items in descending order
        Then I should only see items with price between "<min>" and "<max>"

        Examples:
            | min | max |
            | 110 | 140 |
            | 120 | 120 |
            | 130 | 160 |


    @filterAccessories
    Scenario Outline: Filtering accessories shows only "<type>" items
        Given I click on filter button with name "<type>"
        And I should be on "<type>" page
        Then I should only see items with category type "<type>"

        Examples:
            | type        |
            | Men         |
            | Women       |
            | Accessories |


    @searchForItem
    Scenario Outline: Searching for "<name>" shows only items with word "<name>" in it
        Given I insert the word "<name>" into search input
        And I click on search button
        Then I should only see names containing the word "<name>"

        Examples:
            | name     |
            | jeans    |
            | hoodie   |
            | tshirt   |
            | bag      |
            | shoes    |
            | bracelet |
            | purse    |
