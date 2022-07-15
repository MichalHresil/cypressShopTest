Feature: Test suite #2 - home page testing

    Test of main home page elements
    Pre-Condition: open home page

    @clickGoShoppingPage
    Scenario: Click on <go shopping> button open store page
    Given Clicking on go shopping button
    Then Successfull redirect to store page

    @clickWomenShoppingPage