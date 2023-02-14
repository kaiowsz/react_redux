import React from 'react'
import { RootState } from '../src/store'
import { useTypedSelector } from "../hooks/useTypedSelector"

import TimeAgo from './TimeAgo'
import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'

function PostsList() {

    const posts = useTypedSelector((state) => state.posts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    return (

    <section>
        <h2>Posts</h2>


        {orderedPosts.map(post => (
            <article key={post.id} className="post">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p>
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </p>

                <ReactionButtons post={post}/>
            </article>
        ))}



    </section>
    
    
    )
}

export default PostsList