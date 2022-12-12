import React, { useState } from 'react';
import Tasks from './components/Tasks';
import Header from './components/Header';
import TaskDetais from './components/TaksDetais';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks,setTasks] = useState([
    {
      id: '1',
      title: 'Acordar',
      completed: false,
    },
    {
      id: '2',
      title: 'Programar',
      completed: true,
    }
  ]);
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed:false
      },
    ];
    setTasks(newTasks);
  }
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) return {...task,completed: !task.completed}
      return task;
    })
    setTasks(newTasks);
  }
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task)=> task.id !== taskId);

    setTasks(newTasks);
  }
  return (
    <Router>
      <div className='container'>
        
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Header>Minhas Tarefas</Header>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
            />
            <Route
              path="/:taskTitle"
              exact
              element={
                <>
                  <Header>Detalhes da Tarefa</Header>
                  <TaskDetais/>
                </>
              }
            />
        </Routes>

      </div>
      
    </Router>
  )
}

export default App;
