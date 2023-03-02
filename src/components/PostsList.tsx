import React from 'react'
import { RootState } from '../store'
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllPosts, getPostsStatus, getPostsError, fetchPosts, Post } from '../features/posts/postsSlice'

import TimeAgo from './TimeAgo'
import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'
import PostsExcerpt from './PostsExcerpt'

function PostsList() {
    const dispatch = useDispatch()

    const posts = useTypedSelector(getAllPosts)
    const postsStatus = useTypedSelector(getPostsStatus)
    const postsError = useTypedSelector(getPostsError)
    let content;

    console.log(postsStatus)

    useEffect(() => {
        if (postsStatus === "idle") {
            dispatch(fetchPosts())
        }
        console.log(posts)
    }, [postsStatus, dispatch])

    if(postsStatus === "loading") {
        content = <p>Loading...</p>
    }
    
    if (postsStatus === "succeeded") {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map((post: any) => <PostsExcerpt key={post.id} post={post} />) 
    }
    
    if (postsStatus === "failed") {
        content = <p>{postsError}</p>
    }

    return (

    <section>
        <h2>Posts</h2>
        {content && content}
    </section>
    
    
    )
}

export default PostsList