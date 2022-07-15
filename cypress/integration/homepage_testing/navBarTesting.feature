Feature: 'Test suite #1 - Testing navigation bar'

    Testing of navigation bar and it's components on from home page
    Pre Condition: Opening home page

    @logobutton
    Scenario: 1# Clicking on logo opens homepage
        Given Clicking on page logo
        Then Successfull redirect on home page

    @homebutton
    Scenario Outline: Clicking on <btnName> button opens 
        Given Clicking on button named "<btnName>"
        Then Successfull redirect on "<url>"

        Examples:
            | btnName   | url                                                           |
            | Home      | http://uiautomation.domain.local/                             |
            | Store     | http://uiautomation.domain.local/store/                       |
            | Men       | http://uiautomation.domain.local/product-category/men/        |
            | Women     | http://uiautomation.domain.local/product-category/women/      |


