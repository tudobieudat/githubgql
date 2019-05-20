import React, {Component} from 'react';
import axios from 'axios'
import './App.css';

const access_token = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;
const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${access_token}`
  },
});

const GET_ISSUES_OF_REPOSITORY = `
  {
    organization(login: "the-road-to-learn-react") {
      name
      url
      repository(name: "the-road-to-learn-react") {
        name
        url
        issues(last: 5) {
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
`;

class App extends Component {
  state = {
    path: 'the-road-to-learn-react/the-road-to-learn-react',
    organization: null,
    errors: null,
  };

  componentDidMount() {
    // fetch data
    this.onFetchFromGitHub();
  }

  onChange = (event) => {
    this.setState({ path: event.target.value });
  };

  onSubmit = (event) => {
    // fetch data
    //this.setState({ path: event.target.value });
    event.preventDefault();
  };

  onFetchFromGitHub = () => {
    axiosGitHubGraphQL
    .post('', { query: GET_ISSUES_OF_REPOSITORY })
    .then(result => console.log(result))
  };

  render(){
    const { path, organization } = this.state;

    return (
      <div className="App">
        <h1>RAUXA CODING CHALLENGE</h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="url">
            Show open issues for https://github.com/
          </label>
          <input 
            id="url" 
            type="text" 
            value={path}
            onChange={this.onChange} 
            style={{ width: '300px' }}
          />
          <button type="submit">Search</button>
          <hr />
          {/* Here comes the result */}

        </form>
      </div>
    );
  }
}

export default App;
