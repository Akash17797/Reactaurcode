import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../feature/Todo/TodoSlice';

function UpdateTodos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [updatedText, setUpdatedText] = useState('');
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  const handleUpdate = (id) => {
    if (updatedText.trim() !== '') {
      dispatch(updateTodo({
        id: id,
        newText: updatedText
      }));
      setUpdatedText('');
      setSelectedTodoId(null);
    }
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {selectedTodoId === todo.id ? (
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
            ) : (
              <div className='text-white'>{todo.text}</div>
            )}
            <div>
              {selectedTodoId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md mr-2"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={() => {
                    setSelectedTodoId(todo.id);
                    setUpdatedText(todo.text);
                  }}
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md mr-2"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UpdateTodos;
