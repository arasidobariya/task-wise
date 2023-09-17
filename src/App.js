import Tasks from "./components/Tasks";
import React from "react";
import NewTaskForm from "./components/NewTaskForm";
import EditForm from "./components/EditForm";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import taskContext from "./taskContext";

const dummyData = [
  {
    id: "t1",
    task: "cut the lawn",
    owner: "AD",
    date: "2024-02-25 ",
    isCompleted: true,
  },
  {
    id: "t2",
    task: "pay bill",
    owner: "HP",
    date: "2024-03-08",
    isCompleted: false,
  },
];
function App() {
  const [tasks, setTasks] = useState(dummyData);

  const saveTaskDataHandler = (task) => {
    const taskData = {
      ...task,
      id: Math.random().toString(),
    };
    setTasks((prevTasks) => {
      return [taskData, ...prevTasks];
    });
  };
  const deleteItemHandler = (index) => {
    var remainingArray = [...tasks];
    remainingArray.splice(index, 1);
    setTasks(remainingArray);
  };

  const editItemHandler = (index, task) => {
    var updatedArray = [...tasks];
    updatedArray[index] = task;
    setTasks(updatedArray);
  };

  const handleCheckBoxChange = (index, event) => {
    var isCompleted = event.target.checked;
    var updatedArray = [...tasks];
    updatedArray[index].isCompleted = isCompleted;
    setTasks(updatedArray);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Tasks
          onDeleteItem={deleteItemHandler}
          handleCheckBoxChange={handleCheckBoxChange}
        />
      ),
    },
    {
      path: "/AddTask",
      element: <NewTaskForm onSaveTaskData={saveTaskDataHandler} />,
    },
    {
      path: "/Edit/:index",
      element: <EditForm onSaveItem={editItemHandler} />,
    },
  ]);

  return (
    <taskContext.Provider value={tasks}>
      <RouterProvider router={router} />
    </taskContext.Provider>
  );
}

export default App;
