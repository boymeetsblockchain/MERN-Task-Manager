import {FaEdit,FaCheckDouble,FaRegTrashAlt} from "react-icons/fa"

function Task({task,index,deleteTask}) {
  return (
    <div className='task'>
        <p>
            <b>
              {index +1}. 
              
            </b>
            {task.name}
        </p>
        <div className='task-icons'>
           <FaCheckDouble fill="green"/>
            <FaEdit fill="purple"/>
            <FaRegTrashAlt fill="red" onClick={()=> deleteTask(task._id)}/>
        </div>
    </div>
  )
}

export default Task