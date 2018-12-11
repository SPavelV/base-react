import React from 'react'
import PropTypes from 'prop-types'

export default function Comment({comment}) {
  return (
    <div>
      <h3>{'User name: ' + comment.user}</h3>
      <p>User text:</p>
      <p>{comment.text}</p>
    </div>
  )
}

Comment.PropTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  }).isRequired
};