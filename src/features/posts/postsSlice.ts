// @ts-nocheck

import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit"
import { sub } from "date-fns";
import axios from "axios";

export interface Post {
    id: string;
    title: string;
    content: string;
    userId?: string | number;
    date?: any;
    reactions: {
        thumbsUp: number;
        wow: number;
        heart: number;
        rocket: number;
        coffee: number;
    };
}
type initialStateTyped = Post[]

const initialState = {  
    posts: [],
    status: "idle",
    error: null
}

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get(POSTS_URL)
    return response.data
})

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdd: {

            reducer(state, action) {
                state.posts.push(action.payload)
                alert("Post created successfully!")
            },

            prepare({title, content, userId}): any {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        }
                    }
                }
            }   
        },


        reactionAdd(state, action) {
            const { postId, reaction } = action.payload
            const existingPost: any = state.posts.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    },
    extraReducers(builder) {
        builder

        // addCase looks like a switch case;

            .addCase(fetchPosts.pending, (state, action) => {
            state.status = "loading" })

            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded"
                // add data and reactions after complete request
                let min = 1
                const loadedPosts = action.payload.map((post: Post) => {
                    post.date = sub(new Date(), {minutes: min++}).toISOString(),
                    post.reactions = {
                        thumbsUp: 0,
                        heart: 0,
                        coffee: 0,
                        rocket: 0,
                        wow: 0,
                    }
                    return post
                });
                state.posts = state.posts.concat(loadedPosts)
            })

            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed",
                state.error = action.error.message
            })


    },
})

export const getAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;


export const postsReducer = postsSlice.reducer

export const { postAdd, reactionAdd } = postsSlice.actions