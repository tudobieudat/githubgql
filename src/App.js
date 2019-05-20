import React, {Component} from 'react';
import './App.css';

const access_token = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>RAUXA CODING CHALLENGE</h1>
      </div>
    );
  }
}

export default App;
