import React from 'react'
import ReactDOM from 'react-dom';
import Organization from '../components/Organization';
import { exportAllDeclaration } from '@babel/types';

it("repository test", () => {
    const testData = {
        "data": {
            "organization": {
                "name": "Facebook",
                "url": "https://github.com/facebook",
                "repository": {
                "name": "react",
                "url": "https://github.com/facebook/react",
                "issues": {
                    "edges": [
                    {
                        "node": {
                            "id": "MDU6SXNzdWUxODM4MjI5Mg==",
                            "title": "Declarative API for installing global DOM event handlers",
                            "url": "https://github.com/facebook/react/issues/285",
                            "reactions": {
                                "edges": [
                                    {
                                        "node": {
                                        "id": "MDg6UmVhY3Rpb24zMzIxNzI5MQ==",
                                        "content": "THUMBS_UP"
                                        }
                                    },
                                    {
                                        "node": {
                                        "id": "MDg6UmVhY3Rpb24zMzYwNzE2NA==",
                                        "content": "THUMBS_UP"
                                        }
                                    },
                                    {
                                        "node": {
                                            "id": "MDg6UmVhY3Rpb240MTkwMDM2MA==",
                                            "content": "THUMBS_UP"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "node": {
                            "id": "MDU6SXNzdWUyODA4NjgwOA==",
                            "title": "Provide a way to handle browser-autocompleted form values on controlled components",
                            "url": "https://github.com/facebook/react/issues/1159",
                            "reactions": {
                                "edges": [
                                {
                                    "node": {
                                    "id": "MDg6UmVhY3Rpb24zOTgxMTI1MA==",
                                    "content": "THUMBS_UP"
                                    }
                                },
                                {
                                    "node": {
                                    "id": "MDg6UmVhY3Rpb24zOTk5NzQ5NQ==",
                                    "content": "THUMBS_UP"
                                    }
                                },
                                {
                                    "node": {
                                    "id": "MDg6UmVhY3Rpb240MTY0MzExNw==",
                                    "content": "THUMBS_UP"
                                    }
                                }
                                ]
                            }
                        }
                    },
                    {
                        "node": {
                        "id": "MDU6SXNzdWUyOTMwNTIwNA==",
                        "title": "iframe contents cause invariant violation",
                        "url": "https://github.com/facebook/react/issues/1253",
                        "reactions": {
                            "edges": []
                        }
                        }
                    },
                    {
                        "node": {
                        "id": "MDU6SXNzdWUyOTMxMDg5MQ==",
                        "title": "React shouldn't bind wheel or touch events to the document. ",
                        "url": "https://github.com/facebook/react/issues/1254",
                        "reactions": {
                            "edges": []
                        }
                        }
                    },
                    {
                        "node": {
                        "id": "MDU6SXNzdWUyOTQ2NzcxMA==",
                        "title": "Stop doing data-*, aria-*, start using dataSet",
                        "url": "https://github.com/facebook/react/issues/1259",
                        "reactions": {
                            "edges": [
                            {
                                "node": {
                                "id": "MDg6UmVhY3Rpb24zODgzNzU3Ng==",
                                "content": "THUMBS_UP"
                                }
                            },
                            {
                                "node": {
                                "id": "MDg6UmVhY3Rpb24zOTE0ODM2MQ==",
                                "content": "EYES"
                                }
                            },
                            {
                                "node": {
                                "id": "MDg6UmVhY3Rpb240MDY4MTg3OQ==",
                                "content": "THUMBS_UP"
                                }
                            }
                            ]
                        }
                        }
                    }
                    ],
                    "totalCount": 505,
                    "pageInfo": {
                        "endCursor": "Y3Vyc29yOnYyOpHOAcGkPg==",
                        "hasNextPage": true
                    }
                }
            }
        }
    }
}
   
    const div = document.createElement('div');
    ReactDOM.render(<Organization organization={testData.data.organization} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

const ICON_MAP = {
    THUMBS_UP: '<FontAwesomeIcon icon={faThumbsUp} />',
    THUMBS_DOWN: '<FontAwesomeIcon icon={faThumbsDown} />',
}

it("THUMBS_UP should return faThumbsUp", () => {        
    expect(ICON_MAP['THUMBS_UP']).toEqual("<FontAwesomeIcon icon={faThumbsUp} />");
    expect(ICON_MAP['THUMBS_DOWN']).toEqual("<FontAwesomeIcon icon={faThumbsDown} />");
});

