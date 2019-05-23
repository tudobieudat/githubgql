import React from 'react'

const Followers = ({ followers, onMoreIssuesFetch }) => (
    <div id="repository">
      <h2>Followers: <span className="follower-count">{followers.totalCount}</span></h2>
      <ul className="tiles">
        {followers.edges.map(follower => (
          <li className="tile fade-in" key={follower.node.login}>
            <a href={follower.node.url} target="_blank" rel='noreferrer noopener' key={follower.node.id}>
            <div className="no-wrap">
                <img src={follower.node.avatarUrl} alt="avatar" width="10%" />              
                <span className="follower-name">{follower.node.name}</span>{'   '}{follower.node.login}
              </div>              
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