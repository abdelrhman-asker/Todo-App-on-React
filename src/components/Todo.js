import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import 'animate.css';

const Todo = ({ completeTodo, removeTodo, updateTodo }) => {
  let todos = JSON.parse(localStorage.getItem('inputs'))
  console.log("todos todos",todos)
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  console.log(edit.id)

  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div>
      {todos? 
    todos.map((todo, index) => (
      <div
        className={todo.isComplete ? 'todo-row complete' : 'todo-row animate__animated animate__fadeInLeft'}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)} style={{display:"flex", flexDirection:"column", gap:"10px"}}> 
        <div >
          {todo.text}
         
        </div>
        <span style={{fontSize: "12px"}}>
          {todo.date}
        </span>
        </div>
        <div className='icons'>
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className='delete-icon'
          />
          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className='edit-icon'
          />
        </div>
      </div>
    ))  : null }

    </div>
  ) 
  
};

export default Todo;