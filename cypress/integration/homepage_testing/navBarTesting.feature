Feature: 'Test suite - Testing navigation bar'

    Testing of navigation bar and it's components on from home page

    Background: Opening CN Group E-shop site
        Given I navigate to "main" page
        Then I should be on "main" page

    @logobutton
    Scenario: Clicking on logo opens homepage
        Given I click on E-shop page logo
        Then I should be on "main" page

    @navbuttons
    Scenario Outline: Clicking on <btnName> button opens <btnName> page
        Given I click on button named "<btnName>"
        Then I should be on "<page>" page

        Examples:
            | btnName     | page        |
            | Home        | main        |
            | Store       | store       |
            | Men         | men         |
            | Women       | women       |
            | Accessories | accessories |
            | About       | about       |
            | Contact Us  | contact     |
            | Account     | account     |

    @cartbutton
    Scenario: Clicking on Cart button opens shopping cart page
        Given I click on cart button
        Then I should be on "cart" page


