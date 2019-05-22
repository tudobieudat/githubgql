import React from 'react'

const Followers = ({ followers, onMoreIssuesFetch }) => (
    <div>
      <h2>Followers: <span className="follower-count">{followers.totalCount}</span></h2>
      <ul className="tiles">
        {followers.edges.map(follower => (
          <li className="tile fade-in" key={follower.node.id}>
            <a href={follower.node.url}>
              <img src={follower.node.avatarUrl} alt="avatar" />
              <span className="follower-name">{follower.node.name}</span>
              <span className="follower-login">{follower.node.login}</span>
            </a>
          </li>
        ))}
      </ul>
  
      <hr />

      {followers.pageInfo.hasNextPage && (
        <button className="fetch-more" onClick={onMoreIssuesFetch}>there are more...</button>
      )}
    </div>
  );

export default Followers;