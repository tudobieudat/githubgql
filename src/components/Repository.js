import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'

const Repository = ({ repository, onMoreIssuesFetch }) => (
    <div>
      <p>
        <strong>In Repository:{' '}</strong>
        <a href={repository.url}>{repository.name}</a>
      </p>
  
      <ul className="tiles">
        {repository.issues.edges.map(issue => (
          <li className="tile fade-in" key={issue.node.id}>
            <a href={issue.node.url}>{issue.node.title}</a>
  
            <ul>
              {issue.node.reactions.edges.map(reaction => (
                <li key={reaction.node.id}><FontAwesomeIcon icon={faThumbsUp} /></li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
  
      <hr />
  
      {repository.issues.pageInfo.hasNextPage && (
        <button className="fetch-more" onClick={onMoreIssuesFetch}>there are more...</button>
      )}
    </div>
  );

export default Repository;