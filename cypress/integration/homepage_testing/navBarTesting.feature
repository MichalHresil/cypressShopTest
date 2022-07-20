Feature: 'Test suite - Testing navigation bar'

    Testing of navigation bar and it's components on from home page
    Pre Condition: Opening home page

    Background: Opening CN Group E-shop site
        Given Opening Eshop site url
        Then Should be on Eshop site

    @logobutton
    Scenario: Clicking on logo opens homepage
        Given Clicking on page logo
        Then Successful redirect on home page

    @navbuttons
    Scenario Outline: Clicking on <btnName> button opens <btnPage> page
        Given Clicking on button named "<btnName>"
        Then Successful redirect on "<url>"

        Examples:
            | btnName     | url                                                            | btnPage       |
            | Home        | http://uiautomation.domain.local/                              | Home          |
            | Store       | http://uiautomation.domain.local/store/                        | Store         |
            | Men         | http://uiautomation.domain.local/product-category/men/         | Men product   |
            | Women       | http://uiautomation.domain.local/product-category/women/       | Women product |
            | Accessories | http://uiautomation.domain.local/product-category/accessories/ | Accessories   |
            | About       | http://uiautomation.domain.local/about/                        | About us      |
            | Contact Us  | http://uiautomation.domain.local/contact-us/                   | Contact us    |
            | Account     | http://uiautomation.domain.local/my-account/                   | My Account    |

    @cartbutton
    Scenario: Clicking on Cart button opens shopping cart page
        Given Clicking on button with cart icon
        Then Successful redirect on cart page


