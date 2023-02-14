import React, { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { postAdd } from '../src/features/posts/postsSlice'

function AddPostForm() {

    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [userId, setUserId] = useState("")

    const users = useTypedSelector(state => state.users)

    const canSave = Boolean(title) && Boolean(description) && Boolean(userId)

    function handleSubmitPost(e: FormEvent) {
        e.preventDefault()

        if (title.trim() === "" || description.trim() === "" ) {
            return alert("Complete the fields correctly.")
        }
        console.log(description.length)

        if(description.length > 220) {
            return alert("Text too long. Maximum allowed: 220 characters")
        }

        const newPost = {
            title,
            content: description,
            userId,
        }

        dispatch(postAdd(newPost))

        setDescription("")
        setTitle("")
    }

  return (
    <>
    <h2>Add Post</h2>

    <form onSubmit={e => handleSubmitPost(e)}>
        {/* <div>
            <label htmlFor="contentPost">Author</label>
            <input type="text" id="contentPost" onChange={e => setUserId(e.target.value)} value={userId} required/>
        </div> */}

        <div>
            <label htmlFor="contentPost">Author</label>
            <select id="postAuthor" value={userId} onChange={(e) => setUserId(e.target.value)}>
                <option value=""></option>
                {users.map(user => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
        </div>

        <div>
            <label htmlFor="titlePost">Post Title</label>
            <input type="text" id="titlePost" value={title} onChange={e => setTitle(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="contentPost">Post Content</label>
            <input type="text" id="contentPost" onChange={e => setDescription(e.target.value)} value={description} required/>
        </div>
        <button disabled={!canSave}>Submit</button>


    </form>


    </>
  )
}

export default AddPostForm