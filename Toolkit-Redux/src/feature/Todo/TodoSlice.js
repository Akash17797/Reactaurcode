import { createSlice, nanoid } from "@reduxjs/toolkit";

//  createSlice in redux toolkit is a reducer that we have to make to add functions.
// nanoid just generates unique ids

// while creating store we have to first start with creating initial state. Also, in initial state we can put anything like arrays or objects but prefer it to be object only

const initialState = {
    todos : [{     // is todo is agar kisi ko value chahiye toh wo value use milegi store se
        id: 1,
        text: "Hello"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',        //name is a property of the createSlice() method.

    // multiple slices bhi bna skte hum par har slice kar ek initialState hota hai... jo hum upar bnaya wahi kai log createSlice mei hi initialState bna ke usme values daal dete hai. 
    // initialState : {
    //     todos : [{
    //         id: 1,
    //         text: "Hello"
    //     }]
    // }

    initialState,

    reducers: {   //reducers ek object mangta hai usme property and function ka key value pair hota hai.

        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload   //payload is a object jisme hum kuch bhi daal skte hai jaise ki id ya text ya kuch kuch aur bhi
            }
            // to push the values in state we use push method. state.(property ka naam jo hume initialstate se push karna).push(property ka naam jo reducers mei pe property ke andar se bhejni)
            state.todos.push(todo)
        },  
        // Jab bhi hum addTodo ka koi property ka naam dete hai wha humne functions mei do values milti hi milti hai state and action. State variable hum access dete hi jo bhi initial state mei current values hai uska
        // action
        
        // removeTodo: (state, action) => {
        //     const todoIdToRemove = action.payload;
        //     state.todos = state.todos.filter(todo => todo.id !== todoIdToRemove);
        // }   same code for the below code... for better  understanding
        
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // ContextAPI mei jaise hum fucntions ki defination likhte the and declare app.jsx mei jaake karte the... par redux mei yhi hi defination and yhi hi declaration bhi karte hai

        // hum functions bahar bna ke yha pe uska reference bhi de skte hai... reference dena hai call nhi karna

        // Assignment: Update Todo ka hmne bnana
    }
    
})

// to export we follow the below syntax:

// First we export the individual fucntionalities that we have created so that we can use them later
export const {addTodo, removeTodo} = todoSlice.actions
//  export const { addTodo, removeTodo } = todoSlice.actions is exporting the addTodo and removeTodo action creators from the actions object of the todoSlice. This allows other modules to import and use these action creators to dispatch actions.

export default todoSlice.reducer

// Hme individual functionalities ko bhi export karna padega and pure method ko bhi export karna padega... function kaam aaenge aage components mei and pura method hme store mei store karna padega taaki koi bhi uska access le ske

