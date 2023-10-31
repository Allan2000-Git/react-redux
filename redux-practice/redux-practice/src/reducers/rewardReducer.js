import { createAction, createReducer } from '@reduxjs/toolkit'

const increment = createAction('reward/increment')

const initialState = { points: 0 }

const rewardReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state, action) => {
        state.points++
        })
})

export default rewardReducer