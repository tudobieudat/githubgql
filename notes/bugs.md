path: organization/repository

#1: path is empty
TypeError: Cannot read property 'organization' of undefined
  62 | 
  63 |  if (!cursor) {
  64 |    return {
> 65 |      organization: data.organization,
     | ^  66 |      errors,
  67 |    };
  68 |  }

#2: bogus organization && bogus repository
result: No information yet ...
expected: please check organization name and repository name

#3: repository is empty or bogus
TypeError:Cannot read property 'url' of null
  21 |  <div id="reactionContainer" className="Repository">
  22 |    <p>
  23 |      <strong>In Repository:{' '}</strong>
> 24 |      <a href={repository.url}>{repository.name}</a>
  25 | ^  </p>
  26 | 
  27 |    <ul>

  108 |  };
  109 | 
  110 |  onGitHubFetch = (path, cursor) => {
> 111 |    getIssuesOfRepository(path, cursor).then(queryResult =>
  112 | ^    this.setState(resolveIssuesQuery(queryResult, cursor)),
  113 |    );
  114 |  };

  #4: invalid personal access token
  Failed to load resource: the server responded with a status of 401 (Unauthorized)