import Tasks from './components/Tasks';

import './App.css';
import React from 'react';
import NewTaskForm from './components/NewTaskForm';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';

const dummyData = [{
  id: 't1',
  task: 'cut the lawn',
  owner: 'AD',
  date: new Date(2020, 7, 14),
}, {
  id: 't2',
  task: 'pay bill',
  owner: 'HP',
  date: new Date(2021, 10, 15),
},
]
function App() {
  const [task, setTask] = useState(dummyData)
  const saveTaskDataHandler = (task) => {
    const taskData = {
      ...task,
      id: Math.random().toString()
    }
    setTask(prevTasks => {
      return [taskData, ...prevTasks]
    })

  }
  const router = createBrowserRouter([
    { path: '/', element: <Tasks items={task} /> },
    {
      path: '/AddTask', element: <NewTaskForm onSaveTaskData={saveTaskDataHandler} />
    }

  ])

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
