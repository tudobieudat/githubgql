query get_user_and_followers($login: String!, $pageSize: Int!) {
  user(login: $login) {
    name
    followers(first: $pageSize) {
      totalCount
      edges {
        node {
          login
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}

{ 
  "login": "holman",
  "pageSize": 1
}

{
  "data": {
    "user": {
      "name": "Zach Holman",
      "followers": {
        "totalCount": 5564,
        "edges": [
          {
            "node": {
              "login": "shamio"
            }
          },
          {
            "node": {
              "login": "jpitblado"
            }
          }
        ],
        "pageInfo": {
          "endCursor": "Y3Vyc29yOnYyOpK5MjAxOS0wNS0xOVQwOTowMToxOC0wNzowMM4CrrRY",
          "hasNextPage": true
        }
      }
    }
  }
}