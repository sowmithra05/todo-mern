import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleComplete, onEditTodo, onDeleteTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-list">
        <p>No tasks found. Add a new task or try a different search.</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;