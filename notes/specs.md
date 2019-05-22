Feature: GitHub API Search

Scenario #1: Search a valid GitHub (GH) user
    Given a browser is at the FE Coding Challenge home page
        And a valid GH login 'holman'
        And 'holman' has 5562 followers
    When the user enters 'holman' into the search bar
    Then the page shows the GH handle of 'holman' in the format <name> --- <login>: Zach Holman --- holman
        And shows the total follower count of 5562
        And shows the list of first 10 followers in the format <avatar image> --- <name> --- <login>
        And the [More...] button will be shown at the end of the list.