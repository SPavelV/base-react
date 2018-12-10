import React from 'react'

export default function Comment({comment}) {
  return (
    <div>
      <h3>{'User name: ' + comment.user}</h3>
      <p>User text:</p>
      <p>{comment.text}</p>
    </div>
  )
}