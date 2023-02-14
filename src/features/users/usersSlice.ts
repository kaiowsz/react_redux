import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "0",
        name: "Kaio Silveira"
    },
    {
        id: "1",
        name: "Greg Typ",
    },
    {
        id: "2",
        name: "Dude Lebowski"
    }
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
})

export const usersReducer = usersSlice.reducer;