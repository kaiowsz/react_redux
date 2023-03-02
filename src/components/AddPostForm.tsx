import React, { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { postAdd, addNewPost } from '../features/posts/postsSlice'

function AddPostForm() {

    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [userId, setUserId] = useState("")
    const [requestStatus, setRequestStatus] = useState("idle")

    const users = useTypedSelector(state => state.users)

    const canSave = [title, description, userId].every(Boolean) && requestStatus === "idle"

    function handleSubmitPost(e: FormEvent) {
        e.preventDefault()

        if (title.trim() === "" || description.trim() === "" ) {
            return alert("Complete the fields correctly.")
        }

        if(description.length > 220) {
            return alert("Text too long. Maximum allowed: 220 characters")
        }

        const newPost = {
            title,
            body: description,
            userId,
        }

        if(canSave) {
            try {
                dispatch(addNewPost(newPost)).unwrap()
            } catch (error) {
                console.log(error)
            } finally {
                setRequestStatus("idle")
            }
        }

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