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
        <p>
          <a href={user.url}>
            <img src={user.avatarUrl} alt="avatar" />
            <p className="user-name">{user.name}</p>
            <p className="user-login">{user.login}</p>
          </a>
        </p>
        <Followers
          followers={user.followers}
          onMoreIssuesFetch={onMoreIssuesFetch}
        />
      </div>
    );
  };

export default User;