import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: "1",
        title: "Learning Redux Toolkit",
        content: "Something in the way"
    },
    {
        id: "2",
        title: "Old Yellow Bricks",
        content: "It's a very good song. You should listen because it's one of their best musics of all time, not only by the beat (by the way, it's very good), but also by the lyrics that is very very cool."
    }
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdd: (state, action) => {
            state.push(action.payload)
            alert("Post criado com sucesso!")
        }
    }
})

export const postsReducer = postsSlice.reducer

export const { postAdd, } = postsSlice.actions