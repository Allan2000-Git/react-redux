import { createSlice, nanoid } from '@reduxjs/toolkit'

//nanoid => generates a unique id
export const initialState = {
    todos:[
        {
            id:1,
            text:"Todo 1"
        }
    ]
}

//slice => greater functionality of Reducer
//state => current state; action: current data passed

export const todoSlice = createSlice({
    name:"Todo",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer