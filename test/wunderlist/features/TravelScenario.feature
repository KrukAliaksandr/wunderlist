@aliaksandr
Feature: Travel

    @TravelScenario
    Scenario: Check main tabs
        Given I open "https://www.wunderlist.com" url
        When I click "SignInButton"
        When I click on "3" element from "ExternalAuthButtons"
        When I click on "4" element from "ExternalAuthButtons"
        When I type "testautomationuser990@gmail.com" in "LoginField"
        When I wait until "NextLoginButton" is clickable
        When I click "NextLoginButton"
        When I wait until "PasswordField" is present
        When I wait until "PasswordField" is clickable
        When I wait until "PasswordField" is visible
        When I wait until "NextPasswordButton" is present
        When I wait until "NextPasswordButton" is visible
        When I wait until "NextPasswordButton" is clickable
        When I wait until "PasswordField" is present
        When I type "12378456aa" in "PasswordField"
        When I click "NextPasswordButton"
        When I wait for "5" seconds
        And I wait until "CreateListButton" is present
        When I click "CreateListButton"
        When I type "Project" in "ListNameField"
        When I click "SaveListButton"
        When I wait until "InboxButton" is clickable
        When I click "InboxButton"
        Then Count of "TasksCheckboxes" should be "2"
        When I click on "2" element from "TasksCheckboxes"
        When I wait until "2" element from "TasksCheckboxes" is gone
        Then Count of "TasksCheckboxes" should be "1"
        Then Text of element "1" from "TasksText" should be "DoNotTouch!"
        When I click "CompletedTasksButton"
        Then Text of element "1" from "CompletedTasksText" should be "TaskToComplete"
        Then Count of "CompletedTasksText" should be "1"
        When I click on "1" element from "CompletedTasksCheckboxes"
        Then Count of "TasksCheckboxes" should be "2"
        When I click "UserActionsMenuArrow"
        When I wait for page url to contain "https://www.wunderlist.com/webapp#/me"
        When I click on "9" element from "UserActionsAvailableList"
        And I wait for "5" seconds
        Then Text of "DownloadWunderOnAllDevicesTitle" should contain "Download Wunderlist on all your devices"
        When I wait until "DownloadWunderOnAllDevicesTitle" is visible
        When I click on "3" element from "HeaderAvailableLinks"
        Then Text of element "1" from "ArticlesTitles" should be "New in Microsoft To-Do: List Sharing and Steps"
        When I click on "2" element from "HeaderAvailableLinks"
        When I type "Getting Started with Wunderlist" in "SearchField"
        When I click "SearchButton"
        Then Text of element "1" from "SearchResultItemHeaders" should be "Getting Started with Wunderlist"
