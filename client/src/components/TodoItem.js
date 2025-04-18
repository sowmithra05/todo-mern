import React, { useState } from 'react';

const TodoItem = ({ todo, onToggleComplete, onEditTodo, onDeleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description || '');

  const handleEdit = () => {
    setIsEditing(true);
    setEditTitle(todo.title);
    setEditDescription(todo.description || '');
  };

  const handleUpdate = () => {
    if (!editTitle.trim()) return;
    
    onEditTodo(todo._id, {
      title: editTitle,
      description: editDescription
    });
    
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {!isEditing ? (
        <>
          <input
            type="checkbox"
            className="todo-checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo._id)}
          />
          
          <div className="todo-content">
            <h3 className="todo-title">{todo.title}</h3>
            {todo.description && (
              <p className="todo-description">{todo.description}</p>
            )}
          </div>
          
          <div className="todo-actions">
            <button 
              className="btn btn-secondary" 
              onClick={handleEdit}
              disabled={todo.completed}
            >
              Edit
            </button>
            <button 
              className="btn btn-danger" 
              onClick={() => onDeleteTodo(todo._id)}
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <div className="edit-form">
          <div className="form-group">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Task title"
            />
          </div>
          
          <div className="form-group">
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              placeholder="Task description"
            />
          </div>
          
          <div className="edit-form-actions">
            <button className="btn" onClick={handleUpdate}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;