Feature: Test suite - footer testing

    Testing of implemented links in footer

    Background: Opening CN Eshop home page
        Given Opening CN Eshop home url
        Then Should be on Eshop home page

    Scenario Outline: Clicking on <btnName> button opens <btnPage> page
        Given Clicking on button named "<btnName>"
        Then Successfull redirect on "<url>"

        Examples:
            | btnName    | url                                          | btnPage    |
            | Home       | http://uiautomation.domain.local/            | Home       |
            | About      | http://uiautomation.domain.local/about/      | About us   |
            | My account | http://uiautomation.domain.local/my-account/ | My Account |
            | Cart       | http://uiautomation.domain.local/cart/       | Cart       |
            | Contact Us | http://uiautomation.domain.local/contact-us/ | Contact us |