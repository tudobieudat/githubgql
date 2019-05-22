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
        "totalCount": 5563,
        "edges": [
          {
            "node": {
              "login": "shamio",
              "name": "",
              "avatarUrl": "https://avatars0.githubusercontent.com/u/1525160?v=4"
            }
          },
          {
            "node": {
              "login": "jpitblado",
              "name": "Jeff Pitblado",
              "avatarUrl": "https://avatars2.githubusercontent.com/u/5956541?v=4"
            }
          },
          {
            "node": {
              "login": "rewolf",
              "name": "Andrew Flower",
              "avatarUrl": "https://avatars2.githubusercontent.com/u/201693?v=4"
            }
          },
          {
            "node": {
              "login": "Binotto",
              "name": null,
              "avatarUrl": "https://avatars1.githubusercontent.com/u/18745669?v=4"
            }
          },
          {
            "node": {
              "login": "amotan",
              "name": null,
              "avatarUrl": "https://avatars0.githubusercontent.com/u/48877586?v=4"
            }
          }
        ],
        "pageInfo": {
          "endCursor": "Y3Vyc29yOnYyOpK5MjAxOS0wNS0xNVQwMDoyNDo0Ni0wNzowMM4CrEG6",
          "hasNextPage": true
        }
      }
    }
  }
}