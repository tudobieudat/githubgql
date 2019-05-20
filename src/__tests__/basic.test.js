import React from 'react'
import ReactDOM from 'react-dom';
import Organization from '../components/Organization';
import { exportAllDeclaration } from '@babel/types';

it("basic test", () => {
    const organization = {
        name: "Road to React",
        url: "https://r2r.org"
    }

    const div = document.createElement('div');
    ReactDOM.render(<Organization organization={organization} />, div);
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

