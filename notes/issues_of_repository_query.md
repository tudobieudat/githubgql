query ($orgName: String!, $repoName: String!, $numOfLastIssues: Int!) {
  organization(login: $orgName) {
    name
    url
    repository(name: $repoName) {
      name
      url
      issues(last: $numOfLastIssues) {
        edges {
          node {
            id
            title
            url
          }
        }
      }
    }
  }
}

{ 
  "orgName": "the-road-to-learn-react",
  "repoName": "the-road-to-learn-react",
  "numOfLastIssues": 2
}


{
  "data": {
    "organization": {
      "name": "The Road to learn React",
      "url": "https://github.com/the-road-to-learn-react",
      "repository": {
        "name": "the-road-to-learn-react",
        "url": "https://github.com/the-road-to-learn-react/the-road-to-learn-react",
        "issues": {
          "edges": [
            {
              "node": {
                "id": "MDU6SXNzdWU0Mzc5MTIwMzI=",
                "title": "Link redirection is no longer correct.",
                "url": "https://github.com/the-road-to-learn-react/the-road-to-learn-react/issues/198"
              }
            },
            {
              "node": {
                "id": "MDU6SXNzdWU0NDIyNzgzODI=",
                "title": " access a state object ",
                "url": "https://github.com/the-road-to-learn-react/the-road-to-learn-react/issues/202"
              }
            }
          ]
        }
      }
    }
  }
}