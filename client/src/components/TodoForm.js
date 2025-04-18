import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) return;
    
    const newTodo = {
      title,
      description,
      completed: false
    };
    
    onAddTodo(newTodo);
    
    // Reset the form
    setTitle('');
    setDescription('');
  };

  return (
    <div className="todo-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What needs to be done?"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description (optional)</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add details about this task..."
          />
        </div>
        
        <button type="submit" className="btn">Add Task</button>
      </form>
    </div>
  );
};

export default TodoForm;