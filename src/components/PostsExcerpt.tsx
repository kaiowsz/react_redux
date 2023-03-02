import React from 'react'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
import { Post } from '../features/posts/postsSlice'

interface Props {
    post: any;
}

const PostsExcerpt = ({post}: Props) => {
  return (
    
    <article className="post">
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
    </p>

    <ReactionButtons post={post}/>
</article>
  )
}

export default PostsExcerpt