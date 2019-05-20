import React from 'react'
import ReactDOM from 'react-dom';
import Organization from '../components/Organization';
import { exportAllDeclaration } from '@babel/types';

it("repository test", () => {
    const testData = {
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

    //console.log(testData.data.organization);
    
    const div = document.createElement('div');
    ReactDOM.render(<Organization organization={testData.data.organization} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

const af = ({x}) => x * x;
const afd = (x) => x * x;
console.log(`af({3}) = ${af(3)}`);
console.log(`afd(3) = ${afd(3)}`);

it("arrow function with destructuring param", () => {
    
    //const r2 = afd(3);
    //expect(r).toEqual(9);
    //expect(r2).toEqual(9);
});

