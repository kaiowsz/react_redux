import React from 'react'
import { RootState } from '../src/store'
import { useTypedSelector } from "../hooks/useTypedSelector"


function PostsList() {

    const posts = useTypedSelector((state) => state.posts)

    return (

    <section>
        <h2>Posts</h2>


        {posts.map(post => (
            <article key={post.id} className="post">
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100) + "..."}</p>
            </article>
        ))}



    </section>
    
    
    )
}

export default PostsList