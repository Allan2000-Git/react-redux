import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    points: 0,
}

export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
        increment: (state) => {
            state.points += 1 // immer libary
        },
    }
})

export const { increment} = bonusSlice.actions

export default bonusSlice.reducer