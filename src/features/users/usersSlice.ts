import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any[] = []

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const USERS_URL = "https://jsonplaceholder.typicode.com/users"
    const response = await axios.get(USERS_URL)
    return response.data
})

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        })
    },
})

export const usersReducer = usersSlice.reducer;