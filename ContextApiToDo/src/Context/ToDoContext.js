import { createContext, useContext } from "react";

export const TodoContext = createContext({
    newTodos: [{
        id: 1,
        todo: "Msg to be shown",
        completedStatus: false,
    } ,
    // Yha pe hum jo bhi functions likhte hai wo unke bs hum naam likhte hai n unki functionality hum yha nhi likhte blki app.jsx mei likhte hai
    {}],

    addTodo: (todo) => {},    // todo ko add karne ke liye hme todos se todo chahiye

    updateTodo: (id, todo) => {}, // todo ko update karne ke liye hme todos se todo n id chahiye
    
    deleteTodo: (id) => {}, // todo ko delete karne ke liye hme todos se id chahiye

    toggleComplete: (id) => {}  // todo ko check karne ke liye hme todos se id chahiye
})


// export default function useTodo (){
//     return useContext(TodoContext)
// }

// Same thing below - different method

export const useTodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider 