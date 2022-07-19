Feature: Testing Store page navigation and filtering

    Testing, if filtering items in shop returns expected output

    Background: Visit store page
        Given Open store page on store url
        Then Should be on store url

    @filtermaxSet
    Scenario Outline: Setting max value to "<max>"
        Given Setting filter to max value of "<max>"
        Then Only items with price up to "<max>" should be present

        Examples:
            | max |
            | 140 |




