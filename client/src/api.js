import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = {
  getTodos: async () => {
    try {
      const response = await axios.get(`${API_URL}/todos`);
      return response.data;
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  },

  searchTodos: async (searchTerm) => {
    try {
      const response = await axios.get(`${API_URL}/todos/search?q=${searchTerm}`);
      return response.data;
    } catch (error) {
      console.error('Error searching todos:', error);
      throw error;
    }
  },

  createTodo: async (todoData) => {
    try {
      const response = await axios.post(`${API_URL}/todos`, todoData);
      return response.data;
    } catch (error) {
      console.error('Error creating todo:', error);
      throw error;
    }
  },

  updateTodo: async (id, todoData) => {
    try {
      const response = await axios.patch(`${API_URL}/todos/${id}`, todoData);
      return response.data;
    } catch (error) {
      console.error('Error updating todo:', error);
      throw error;
    }
  },

  deleteTodo: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/todos/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting todo:', error);
      throw error;
    }
  }
};