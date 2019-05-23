import React, { Component } from 'react';
import axios from 'axios';
import User from './components/User'

const APP_TITLE = 'GitHub GraphQL API';

const gitHubService = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

const USER_FOLLOWERS_QUERY = `
query ($login: String!, $cursor: String) {
    user(login: $login) {
      login
      name
      avatarUrl
      url
      followers(first: 10, after: $cursor) {
        totalCount
        edges {
          node {            
            login
            name
            avatarUrl
            company
            url
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

const getIssuesOfRepository = (login, cursor) => {
  return gitHubService.post('', {
    query: USER_FOLLOWERS_QUERY,
    variables: { login, cursor },
  });
};

const resolveIssuesQuery = (queryResult, cursor) => state => {
  const { data, errors } = queryResult.data;

  if (!cursor) {
    return {
      user: data.user,
      errors,
    };
  }

  // merging old followers with newly fetched followers
  const { edges: oldFollowers } = state.user.followers;
  const { edges: newFollowers } = data.user.followers;
  const updatedFollowers = [...oldFollowers, ...newFollowers];

  return {
    user: {
      ...data.user,
      followers: {
        ...data.user.followers,
        edges: updatedFollowers,
      },
    },
    errors,
  };
};

class App extends Component {
  state = {
    login: 'holman',
    user: null,
    errors: null,
  };

  componentDidMount() {
    this.onGitHubFetch(this.state.login);
  }

  onChange = event => {
    this.setState({ login: event.target.value });
  };

  onSubmit = event => {
    this.onGitHubFetch(this.state.login);

    event.preventDefault();
  };

  onGitHubFetch = (login, cursor) => {
    getIssuesOfRepository(login, cursor).then(queryResult =>
      this.setState(resolveIssuesQuery(queryResult, cursor)),
    );
  };

  // onGitHubFetch = () => {
  //   gitHubService.post('',{ query: USER_FOLLOWERS_QUERY, variables: { login:"holman" } })
  //   .then(result => console.log(result))
  // }

  onMoreIssuesFetch = () => {
    const {
      endCursor,
    } = this.state.user.followers.pageInfo;

    this.onGitHubFetch(this.state.login, endCursor);
  };

  render() {
    const { login, user, errors } = this.state;
    return (
      <div>
        <h1>{APP_TITLE}</h1>

        <form onSubmit={this.onSubmit}>
          <label htmlFor="login">
            Enter user's login name:
          </label>
          <input
            id="login"
            type="text"
            value={login}
            onChange={this.onChange}
            style={{ width: '300px' }}
          />
          <button type="submit">Search</button>
        </form>

        <hr />

        {user ? (
          <User
            user={user}
            errors={errors}
            onMoreIssuesFetch={this.onMoreIssuesFetch}
          />
        ) : (
          <p>No information yet ...</p>
        )}
      </div>
    );
  }
}

export default App;