import {useState,useEffect}from 'react'
import { toast } from 'react-toastify'
import Task from './Task'
import TaskForm from './TaskForm'
import axios from 'axios'
import loadingImg from '../assets/loader.gif'
// http://localhost:5000/api/tasks
function TaskList() {
   const[tasks, setTasks] = useState([])
   const[completed, setCompleted]= useState([])
   const[isLoading, setIsLoading]= useState(false)
    const [formData,setFormData]= useState({
        name:"",
        completed:false
    })
    const{name}= formData
 const[isEditing, setIsEditing] =useState(false)
 const[tasksId, setTasksId] = useState('')
    const getTasks = async ()=>{
      setIsLoading(true)
      try {
        const {data} =await axios.get("http://localhost:5000/api/tasks")
        setTasks(data)
        
      } catch (error) {
        toast.error(error.message)
        console.log(error)
        setIsLoading(false)
      }
    }
     useEffect(()=>{
      getTasks()
     },[])
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
         getTasks()
      } catch (error) {
        toast.error(error.message)
        
      }
     
    }
    const deleteTask = async(id)=>{
      try {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`)
        toast.success("deleted successfully")
        getTasks()
      } catch (error) {
        toast.error(error.message)
        console.log(error)
      }
    }
     const getSingleTask = async(task)=>{
      setFormData({
        name:task.name, completed:false
      })
      setTasksId(task._id)
      setIsEditing(true)
     }
     const updateTask =async(e)=>{
      e.preventDefault()
      if(name ===""){
        return toast.error("input field cannot be empty")

      }
      try {
         await axios.put(`http://localhost:5000/api/tasks/${tasksId}`,formData)
         setFormData({...formData, name:""})
         setIsEditing(false)
         getTasks()
      } catch (error) {
        toast.error(error.message)
      }

     }
  return (
    <div>
        <h2>Task Manager</h2>
        <TaskForm  name={name} handleInputChange={handleInputChange}
        createTask={createTask} isEditing={isEditing} updateTask={updateTask}/>
        <div className='--flex-between --pb'>
         <p>
            <b>Total Task:</b> 0
         </p>
         <p>
            <b>Completed Task:</b> 0
         </p>
        </div>
        <hr/>
        {
          !isLoading &&(
            <div className='--flex-center'>
               <img src={loadingImg} alt='loading'/>
              </div>
          )
        }
        {
          !isLoading &&tasks.length === 0 ? (
            <p className='--py'>No task Added. Please add a Task</p>
          ): (
            <>
             {tasks.map((task, index)=>{
              return (
                <Task key={task.id} task={task} index={index}
                deleteTask={deleteTask} getSingleTask={getSingleTask}/>
              )
             })}
            </>
          )
        }
       
    </div>
  )
}

export default TaskList