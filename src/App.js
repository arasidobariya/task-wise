import Tasks from './components/Tasks';

import './App.css';
import React from 'react';
import NewTaskForm from './components/NewTaskForm';
import EditForm from './components/EditForm';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';

const dummyData = [{
  id: 't1',
  task: 'cut the lawn',
  owner: 'AD',
  date: '2024-02-25 '
}, {
  id: 't2',
  task: 'pay bill',
  owner: 'HP',
  date: '2024-03-08'
},
]
function App() {
  const [tasks, setTasks] = useState(dummyData)
  const saveTaskDataHandler = (task) => {
    const taskData = {
      ...task,
      id: Math.random().toString()
    }
    setTasks(prevTasks => {
      return [taskData, ...prevTasks]
    })

  }

  const deleteItemHandler = (index) => {
    var remainingArray = [...tasks]
    remainingArray.splice(index, 1)
    setTasks(remainingArray)
  }

  const editItemHandler = (index, task) => {
    var updatedArray = [...tasks]
    updatedArray[index] = task
    setTasks(updatedArray)
  }
  const router = createBrowserRouter([
    {
      path: '/', element: <Tasks items={tasks} onDeleteItem={deleteItemHandler} />,
    },
    {
      path: '/AddTask', element: <NewTaskForm onSaveTaskData={saveTaskDataHandler} />
    },
    {
      path: '/Edit/:index', element: <EditForm items={tasks} onSaveItem={editItemHandler} />
    }])

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
