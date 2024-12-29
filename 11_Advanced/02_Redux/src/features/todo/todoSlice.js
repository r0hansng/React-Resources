import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}


export const todoSlice = createSlice({
    // Name is required parameter, which is the name of the slice we created
    name: 'todo',
    initialState,
    reducers: {
        // Action here is optional this doesn't always need to happen  
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload,
            }
            state.todos.push[todo]
        },
        // state variable will give the current state of the object
        // action variable will provide whatever data is passed 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    } //This expects properties and functions 
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer