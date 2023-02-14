import { createSlice, nanoid } from "@reduxjs/toolkit"
import { sub } from "date-fns";

export interface Post {
    id: string;
    title: string;
    content: string;
    userId?: string | number;
    date ?: any;
    reactions: {
        thumbsUp: number;
        wow: number;
        heart: number;
        rocket: number;
        coffee: number;
    };
}

type initialStateTyped = Post[]

const initialState: initialStateTyped = [
    {
        id: "1",
        title: "Learning Redux Toolkit",
        content: "Something in the way",
        date: sub(new Date(), {minutes: 15}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
    },
    {
        id: "2",
        title: "Old Yellow Bricks",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, corporis quaerat voluptatum accusantium ea doloremque, facilis, quia amet accusamus sed nobis? Debitis cumque iste saepe natus unde sint cupiditate atque.",
        date: sub(new Date(), {minutes: 5}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
    }
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdd: {
            reducer(state, action) {
                state.push(action.payload)
                alert("Post created successfully!")
            },
            prepare({title, content, userId}) {
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
            const existingPost: any = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }




    }
})

export const postsReducer = postsSlice.reducer

export const { postAdd, reactionAdd } = postsSlice.actions