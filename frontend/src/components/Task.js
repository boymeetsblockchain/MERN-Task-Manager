import {FaEdit,FaCheckDouble,FaRegTrashAlt} from "react-icons/fa"

function Task() {
  return (
    <div className='task'>
        <p>
            <b>1.
                Task 1
            </b>
        </p>
        <div className='task-icons'>
           <FaCheckDouble fill="green"/>
            <FaEdit fill="purple"/>
            <FaRegTrashAlt fill="red"/>
        </div>
    </div>
  )
}

export default Task