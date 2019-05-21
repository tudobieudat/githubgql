{
  "data": {
    "organization": {
      "name": "Facebook",
      "url": "https://github.com/facebook",
      "repository": null
    }
  },
  "errors": [
    {
      "type": "EXCESSIVE_PAGINATION",
      "path": [
        "organization",
        "repository",
        "issues"
      ],
      "locations": [
        {
          "line": 8,
          "column": 7
        }
      ],
      "message": "Requesting 101 records on the `issues` connection exceeds the `first` limit of 100 records."
    }
  ]
}