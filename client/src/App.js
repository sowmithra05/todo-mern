import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';
import { api } from './api';

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch all todos
  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      const data = await api.getTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Search todos
  const handleSearch = async (term) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      fetchTodos();
      return;
    }

    try {
      setIsLoading(true);
      const data = await api.searchTodos(term);
      setTodos(data);
    } catch (err) {
      setError('Failed to search todos');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Add a new todo
  const addTodo = async (todo) => {
    try {
      const newTodo = await api.createTodo(todo);
      setTodos([newTodo, ...todos]);
    } catch (err) {
      setError('Failed to create todo');
      console.error(err);
    }
  };

  // Toggle todo completion status
  const toggleComplete = async (id) => {
    try {
      const todoToUpdate = todos.find(todo => todo._id === id);
      const updatedTodo = await api.updateTodo(id, { 
        completed: !todoToUpdate.completed 
      });
      
      setTodos(todos.map(todo => 
        todo._id === id ? updatedTodo : todo
      ));
    } catch (err) {
      setError('Failed to update todo');
      console.error(err);
    }
  };

  // Edit todo
  const editTodo = async (id, updatedData) => {
    try {
      const updatedTodo = await api.updateTodo(id, updatedData);
      setTodos(todos.map(todo => 
        todo._id === id ? updatedTodo : todo
      ));
    } catch (err) {
      setError('Failed to update todo');
      console.error(err);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await api.deleteTodo(id);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error(err);
    }
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>MERN Todo App</h1>
      </header>
      <main className="app-main">
        <SearchBar onSearch={handleSearch} />
        <TodoForm onAddTodo={addTodo} />
        
        {error && <div className="error-message">{error}</div>}
        
        {isLoading ? (
          <div className="loading">Loading todos...</div>
        ) : (
          <TodoList
            todos={todos}
            onToggleComplete={toggleComplete}
            onEditTodo={editTodo}
            onDeleteTodo={deleteTodo}
          />
        )}
      </main>
    </div>
  );
}

export default App;