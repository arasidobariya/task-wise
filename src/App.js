import Tasks from './components/Tasks';
import NewTasks from './components/AddTask';
import './App.css';
import React from 'react';
import NewTaskForm from './components/NewTaskForm';

function App() {
  return (
    <div >
      <Tasks />
      <NewTasks />
      <NewTaskForm />
    </div>
  );
}

export default App;
