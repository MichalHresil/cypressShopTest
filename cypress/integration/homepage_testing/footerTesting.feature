Feature: Test suite - footer testing

    Testing of implemented links in footer

    Background: Opening CN Group E-shop site
        Given I navigate to "main" page
        Then I should be on "main" page

    @footerNavClicking
    Scenario Outline: Clicking on <btnName> button opens <btnName> page
        Given I click on footer button named "<btnName>"
        Then I should be on "<page>" page

        Examples:
            | btnName    | page    |
            | Home       | main    |
            | About      | about   |
            | My account | account |
            | Cart       | cart    |
            | Contact Us | contact |