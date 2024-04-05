import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "Msg to be shown",
        completedStatus: false,
    } ,
    // Yha pe hum jo bhi functions likhte hai wo unke bs hum naam likhte hai n unki functionality hum yha nhi likhte blki app.jsx mei likhte hai
    {}],

    addTodo: (todo) => {},

    updateTodo: (id, todo) => {},
    
    deleteTodo: (id) => {},

    toggleComplete: (id) => {} 
})


// export default function useTodo (){
//     return useContext(TodoContext)
// }

// Same thing below - different method

export const useTodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider