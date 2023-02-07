import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoList = () => {
  const [ todos, setTodos] = useState(JSON.parse(localStorage.getItem('inputs')) || [])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.test)){
            return
        }
        const newTodos = [...todos ,todo ];

        setTodos(newTodos)
    localStorage.setItem('inputs', JSON.stringify(newTodos));

    };

    const updateTodo = (todoId, newValue ) => {
      if (!newValue.text || /^\s*$/.test(newValue.test)){
        return
      }

      const editting = prev => prev.map(item => (item.id === todoId ? newValue : item ))
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item )))
    localStorage.setItem('inputs', JSON.stringify([...todos],{editting}));
      
    };

    const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id )
      setTodos(removeArr)
    localStorage.setItem('inputs', JSON.stringify(removeArr));

    }


    const completeTodo = id =>{
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodos(updatedTodos);
    localStorage.setItem('inputs', JSON.stringify(updatedTodos));

    }


  return (
    <div>
        <h1> What`s the plan today</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
        todos={todos} 
        completeTodo={completeTodo} 
        removeTodo={removeTodo} 
        updateTodo={updateTodo} />

    </div>
  )
}

export default TodoList