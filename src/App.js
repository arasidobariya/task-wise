import Tasks from './components/Tasks';

import './App.css';
import React from 'react';
import NewTaskForm from './components/NewTaskForm';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Tasks /> },
  {
    path: '/AddTask', element: <NewTaskForm />
  }

])
function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
