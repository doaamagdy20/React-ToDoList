import { useState, useEffect } from 'react';
import './App.css';
import AddTask from './Component/AddTask/AddTask';
import TaskList from './Component/TaskList/TaskList';

function App() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks((prev)=>[newTask,...prev])
  };

 const deleteTask=(id)=>{
 setTasks((prev)=>prev.filter((t)=>t.id !==id))
 }

  const editTask = (id, newText) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      )
    );
  };
  const toggleTask = (id) => {
  setTasks((prev) =>
    prev.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    )
  );
};

  const deleteAllTasks = () => {
  setTasks([]); 
};


  return (
    <div>
      <h1>TO DO LIST</h1>
      <AddTask onAddTask={addTask} />
      <TaskList 
        onDeleteTask={deleteTask} 
        tasks={tasks} 
        onEditTask={editTask} 
         onToggleTask={toggleTask}
      />
      
  {tasks.length > 0 && (  
    <button className='all'
      onClick={deleteAllTasks}
    
    >
      Delete All
    </button>
  )}
    </div>
  );
}

export default App;
