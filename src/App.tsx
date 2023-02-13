import React, { useState } from 'react'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import AddPostForm from '../components/AddPostForm'
import PostsList from '../components/PostsList'
import { RootState } from './store'

export default function App() {



  return (
    <div>
      <AddPostForm />
      <PostsList />
    </div>
  )
}
