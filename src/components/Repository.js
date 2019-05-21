import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import './Repository.css'

const Repository = ({ repository, onMoreIssuesFetch }) => (
    <div id="reactionContainer" className="Repository">
      <p>
        <strong>In Repository:{' '}</strong>
        <a href={repository.url}>{repository.name}</a>
      </p>
  
      <ul>
        {repository.issues.edges.map(issue => (
          <li key={issue.node.id}>
            <a href={issue.node.url}>{issue.node.title}</a>
  
            <ul id="reaction">
              {issue.node.reactions.edges.map(reaction => (
                <li key={reaction.node.id}><FontAwesomeIcon icon={faThumbsUp} /></li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
  
      <hr />
  
      {repository.issues.pageInfo.hasNextPage && (
        <button onClick={onMoreIssuesFetch}>More</button>
      )}
    </div>
  );

export default Repository;