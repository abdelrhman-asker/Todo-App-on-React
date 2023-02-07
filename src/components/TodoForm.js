import React, { useState, useEffect, useRef } from 'react';

function TodoForm(onSubmit) {
  const [input, setInput] = useState(onSubmit.edit ? onSubmit.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {
    
    e.preventDefault();
    onSubmit.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      date: (new Date().getDate())  +  " / " + (new Date().getMonth()+1) +" / " + (new Date().getFullYear())
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {onSubmit.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;