# FRONT-END CODING CHALLENGE

## The Challenge

Prototype the following project:

### GitHub Followers

Create a service that allows for a user to search for a GitHub username. On a successful search return, display the user's GitHub handle, follower count, and a list of the user's followers (just the avatar is fine). Since some users (e.g. mrdoob, holman, etc.) have many thousands of followers, GitHub only returns a portion of the followers with each request. Create a "load more" button that, when clicked, fetches the next payload of followers. This button should persist until there are no more pages of followers to fetch.

Information on the GitHub API is available here: [GitHub API](https://developer.github.com/v4/)

The UX/UI is totally up to you. If you like, get creative and add additional features a user might find useful!

## Techical choices
(Reasoning behind your technical choices, including architectural trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project.)

* This is a single-page application (SPA) using React.

* This prototype uses the GitHub GraphQL API. GraphQL offers the ability to define precisely the data you want--no more, no less--is a powerful advantage over the REST API endpoints. GraphQL lets you replace multiple REST requests with a single call to fetch the data you specify.

* I started this app using Create React App (CRA). CRA is an officially supported way to create SPAs and offers a modern build setup with zero configuration. You don't need to install or configure tools like Webpack, or Babel. They are configured and hidden so that developers can focus on the code.

The boilerplate code generated are very simple, but I simplified it to become minimal to start with, below are 3 main files at their initial state:

```
<!--index.html-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>THE FRONT-END CHALLENGE</h1>
    </div>
  );
}

export default App;
```
Of course, it also contains the package.json to list all project dependencies.

To run the app, all you need to do is:
```
$ git clone https://github.com/harryvu/rauxa-cc-fe.git
$ cd rauxa-cc-fe
$ npm run
```

Notes:
* When the application starts index.html is the first page that is loaded. This file has a root division which act as a placeholder for all application components are loaded into it.
```
<div id="root"></div>
```

* index.js is the entry point of the app. It has one important line of code to load the top-level App component into the root division.
```
ReactDOM.render(<App />, document.getElementById(‘root’));
```

* App.js is the top-level component or root component. React apps are component-based architecture and it must has a single root component.

### TLDR
There are many open-source platforms for building SPAs, The most popular are React, Angular and Vue. They are all good frameworks or library. That's made choosing technical stack are sometimes becomes a tedious task. There are pros and cons for each platform or library. I just prefer React because it is just a JavaScript library, so it offers a lot of freedom for developers. Learn React once, you can write anywhere--iOS, Android, VR/AR apps, smart TV...

This prototype uses Create React App (CRA). It is an officially supported way to create SPAs and offers a modern build setup with zero configuration.

* Simplicity
React is just a JavaScript library. It's not a framework, there is a very small API to learn, just a few functions.

* Declarative
React introduces JSX that allows developers to insert HTML in JavaScript.
JSX allows the declarative description of the interface by combining the ease of writing views with the power of JavaScript.

Declarative views make your code more predictable and easier to debug.

* Easy Integration
React doesn't make assumptions about the rest of your technology stack, so you can develope new features in React without rewriting existing code (for other parts).




## Link to other code you're particularly proud of.

## Link to your resume or public profile.

## Link to the hosted application.

HOW RAUXA REVIEW
---
Clarity: does the README clearly and concisely explains the problem and solution? Are technical tradeoffs explained?

Correctness: does the application do what was asked? If there is anything missing, does the README explain why it is missing?

Code quality: is the code simple, easy to understand, and maintainable? Are there any code smells or other red flags? Does object-oriented code follows principles such as the single responsibility principle? Is the coding style consistent with the language's guidelines? Is it consistent throughout the codebase?

Testing: how thorough are the automated tests? Will they be difficult to change if the requirements of the application were to change? Are there some unit and some integration tests? * We're not looking for full coverage (given time constraint) but just trying to get a feel for your testing skills.

UX: is the web interface understandable and pleasing to use?

Technical choices: do choices of libraries, architecture etc. seem appropriate for the chosen application?

Scalability (bonus): will technical choices scale well? If not, is there a discussion of those choices in the README?

Production-readiness (bonus): does the code include monitoring? Logging? Proper error handling?