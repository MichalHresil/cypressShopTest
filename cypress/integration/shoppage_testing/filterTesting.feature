Feature: Testing Store page navigation and filtering

    Testing, if filtering items in shop returns expected output

    Background: Visit store page
        Given Open store page on store url
        Then Should be on store url

    @filtermaxSet
    Scenario Outline: Setting min value to "<min>" and max value to "<max>"
        Given Setting filter to min value of "<min>" and max value of "<max>"
        And Sorting items from high to low price
        Then Only items with price between "<min>" and "<max>" should be present

        Examples:
            | min | max |
            | 110 | 140 |
            | 120 | 120 |
            | 130 | 160 |


    @filterAccessories
    Scenario: Filtering accessories shows only accessory items
        Given Clicking on accessories filter button
        And Successful redirect on accessories page
        Then Only accesory type items should be present

