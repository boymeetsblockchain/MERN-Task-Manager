import {useState}from 'react'
import { toast } from 'react-toastify'
import Task from './Task'
import TaskForm from './TaskForm'
import axios from 'axios'
// http://localhost:5000/api/tasks
function TaskList() {
    const [formData,setFormData]= useState({
        name:"",
        completed:false
    })
    const{name}= formData

    const handleInputChange = (e)=>{
      const {name,value} = e.target
      setFormData({...formData, [name]:value})
    }
    const createTask =async (e)=>{
      e.preventDefault()
      if(name===""){
         return toast.error("input field cannot be empty")
      }
      try {
         await axios.post("http://localhost:5000/api/tasks", formData
         )
         setFormData({...formData,name:""})
         toast.success("task added successfully")
      } catch (error) {
        toast.error(error.message)
        
      }
    }
  return (
    <div>
        <h2>Task Manager</h2>
        <TaskForm  name={name} handleInputChange={handleInputChange}
        createTask={createTask}/>
        <div className='--flex-between --pb'>
         <p>
            <b>Total Task:</b> 0
         </p>
         <p>
            <b>Completed Task:</b> 0
         </p>
        </div>
        <hr/>
        <Task/>
    </div>
  )
}

export default TaskList