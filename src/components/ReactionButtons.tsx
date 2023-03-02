import React from 'react'
import { useDispatch } from 'react-redux'
import { Post, reactionAdd } from '../features/posts/postsSlice'

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
}

interface PropsReaction {
    post: Post;
}

function ReactionButtons({post}: PropsReaction) {

    const dispatch = useDispatch()
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {

        return (
            <button
            key={name}
            style={{marginBottom: "20px", marginRight: "5px"}}
            type="button"
            className="reactionButton"
            onClick={() => dispatch(reactionAdd({postId: post.id, reaction: name}))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div>{reactionButtons}</div>

}

export default ReactionButtons