import React from 'react'
import Followers from './Followers'

const User = ({
    user,
    errors,
    onMoreIssuesFetch,
  }) => {
    if (errors) {
      return (
        <p>
          <strong>Something went wrong:</strong>
          {errors.map(error => error.message).join(' ')}
        </p>
      );
    }
  
    return (
      <div>
        <a href={user.url} key={user.login}>
          <img src={user.avatarUrl} alt="avatar" />
          <h4 className="user-name">{user.name}</h4>
          <span className="user-login">{user.login}</span>
        </a>
        <Followers
          followers={user.followers}
          onMoreIssuesFetch={onMoreIssuesFetch}
        />
      </div>
    );
  };

export default User;