Feature: Test suite - home page testing

    Test of main home page elements
    Pre-Condition: open home page

    Background: Opening CN Eshop home page
        Given Opening Eshop url
        Then Should be on Eshop url

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

