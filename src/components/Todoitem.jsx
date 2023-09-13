import './Todoitem.css'
import { BsFillTrashFill } from "react-icons/bs";

function Todoitem(props){
    let {id, completed, label} = props

    return(
        <li className="todo-item">
            <label>
                {props.label}
            </label>
            <input 
            checked={completed} 
            onChange={() => {props.toggleTaskCompleted(id)}}
            type="checkbox" />
            <button 
            onClick={() => {props.deleteTask(id)}}><BsFillTrashFill/></button>
        </li>
    )
}

export default Todoitem