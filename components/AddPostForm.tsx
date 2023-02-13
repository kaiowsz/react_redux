import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdd } from '../src/features/posts/postsSlice'
import { nanoid } from "@reduxjs/toolkit"

function AddPostForm() {

    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    function handleSubmitPost(e: FormEvent) {
        e.preventDefault()

        if (title.trim() === "" || description.trim() === "" ) {
            return alert("Complete the fields correctly.")
        }

        const newPost = {
            id: nanoid(),
            title,
            content: description
        }

        dispatch(postAdd(newPost))
    }

  return (
    <>
    <h2>Add Post</h2>

    <form onSubmit={e => handleSubmitPost(e)}>
        <div>
            <label htmlFor="titlePost">Post Title</label>
            <input type="text" id="titlePost" value={title} onChange={e => setTitle(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="contentPost">Post Content</label>
            <input type="text" id="contentPost" onChange={e => setDescription(e.target.value)} value={description} required/>
        </div>
        <button>Submit</button>


    </form>


    </>
  )
}

export default AddPostForm