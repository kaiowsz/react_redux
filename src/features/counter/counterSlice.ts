import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface InitialState {
    count: number;
}

const initialState: InitialState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        }
    }
})

export const {increment, decrement, incrementAmount} = counterSlice.actions

export default counterSlice.reducer