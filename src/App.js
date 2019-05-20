import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Organization from './components/Organization';

const access_token = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;
const gitHubService = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${access_token}`
  },
});

const NUM_OF_LAST_ISSUES = 20;

const GET_ISSUES_OF_REPOSITORY = `
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
`;

const getIssuesOfRepository = path => {
  const [orgName, repoName] = path.split('/');

  return gitHubService.post('', {
    query: GET_ISSUES_OF_REPOSITORY,
    variables: { orgName, repoName, numOfLastIssues: NUM_OF_LAST_ISSUES },
  });
};

const resolveIssuesQuery = queryResult => () => ({
  organization: queryResult.data.data.organization,
  errors: queryResult.data.errors,
});

class App extends Component {
  state = {
    path: 'the-road-to-learn-react/the-road-to-learn-react',
    organization: null,
    errors: null,
  };

  componentDidMount() {
    // fetch data
    this.onGitHubFetch(this.state.path);
  }

  onChange = (event) => {
    this.setState({ path: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.onGitHubFetch(this.state.path);    
  };

  onGitHubFetch = (path) => {
    getIssuesOfRepository(path).then(queryResult =>
      this.setState(resolveIssuesQuery(queryResult))
    );
  };

  render(){
    const { path, organization, errors } = this.state;

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
          {organization ? (
            <Organization organization={organization} errors={errors} />
          ):(
            <p>No information yet...</p>
          )}
        </form>
      </div>
    );
  }
}

export default App;
