import { useTypedSelector } from "../hooks/useTypedSelector"
import React from 'react'

function PostAuthor({userId}: any) {
    
    const users = useTypedSelector(state => state.users)

    const author = users.find(user => user.id === userId);

  return (
    <span>
        by {author ? author.name : "Unknown"}
    </span>
  )
}

export default PostAuthor