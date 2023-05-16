import { ArrowDownLeftIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const CustomForm = ({addTask}) => {
    const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault()
    addTask({
        name: task,
        checked: false,
        id: Date.now()
    });
    setTask("");
  }

  return (
    <form className="todo"
    onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input type="text" 
        id="task"
        className="input"
        value={task}
        onInput={(e) => setTask(e.target.value)}
        required
        autoFocus
        maxLength={60}
        placeholder="Enter Your Task"
        />
        <label htmlFor="task"
        className="label"
        >Enter Your Task</label>
      </div>
      <button className="btn"
      aria-label="Add Task"
      type="submit"
      >
        
       <ArrowDownLeftIcon className="h-6 w-6 text-blue-500" />
      </button>
    </form>
  )
}

export default CustomForm