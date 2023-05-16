import { useState } from 'react';
import CustomForm from './components/CustomForm';
import TaskList from './components/TaskList';
import EditForm from './components/EditForm';
import useLocalStorage from './hooks/useLocalStorage';


function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo-tasks', []);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
 
  const addTask = (task) => {
     setTasks(currentTasks => 
        [...currentTasks, task]
     )
  }

  const deleteTask = (id) => {
    setTasks(currentTasks => currentTasks.filter(task => task.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(currentTasks => currentTasks.map(task => task.id === id? 
      {...task, checked: !task.checked} : task))
  }

  const updateTask = (task) => {
    setTasks(currentTasks => currentTasks.map(t => t.id === task.id? 
      {...t, name: task.name} : t))
      closeEditMode();

  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();

  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }


  return (
    
      <div className='container'>
        <header>
          <h1>My Task List</h1>
        </header>
        {isEditing && (<EditForm 
        editedTask={editedTask}
        updateTask={updateTask}
        closeEditMode={closeEditMode}
        />)}
       <CustomForm addTask={addTask}/>
       {tasks && (
       <TaskList 
       tasks={tasks} 
       deleteTask={deleteTask}
       toggleTask={toggleTask}
       enterEditMode={enterEditMode}
       />
       )}
      </div>
      
    
  )
}

export default App
