# MERN Stack Todo Application

A full-stack Todo application built using the MERN stack (MongoDB, Express, React, Node.js).

## Features

- Create new tasks with title and description
- View all tasks in a clean, organized interface
- Update tasks (mark as completed or edit content)
- Delete tasks
- Search tasks by title or description
- Real-time synchronization with MongoDB database

## Project Structure


todo-app/
├── client/                 # React frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoForm.js
│   │   │   ├── TodoItem.js
│   │   │   ├── TodoList.js
│   │   │   ├── SearchBar.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── App.css
│   │   ├── api.js
│   ├── package.json
├── server/                 # Node/Express backend
│   ├── models/
│   │   ├── Todo.js
│   ├── routes/
│   │   ├── todos.js
│   ├── server.js
│   ├── package.json
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

## Installation

### Setting up MongoDB

Ensure MongoDB is installed and running on your system. The application connects to:
```
mongodb://localhost:27017/todoapp
```

### Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

The server will run on port 5000 by default.

### Frontend Setup

1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm start
   ```

The React application will open automatically in your browser at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/todos | Get all todos |
| GET | /api/todos/search?q=query | Search todos by title or description |
| GET | /api/todos/:id | Get a specific todo |
| POST | /api/todos | Create a new todo |
| PATCH | /api/todos/:id | Update a todo |
| DELETE | /api/todos/:id | Delete a todo |

## Technologies Used

### Frontend
- React.js
- Axios for HTTP requests
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB for database
- Mongoose for object modeling
- Cors for cross-origin resource sharing

## Development

For development, the application uses nodemon to automatically restart the server on file changes.

## Future Enhancements

- User authentication
- Task categories/labels
- Due dates and reminders
- Task prioritization
- Dark mode option
- Mobile responsive design improvements

## License

This project is licensed under the MIT License.

## Acknowledgements

- MongoDB documentation
- React documentation
- Express.js documentation
- Node.js documentation