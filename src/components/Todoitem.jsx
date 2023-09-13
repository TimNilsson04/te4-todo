import './Todoitem.css'

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
            onClick={() => {props.deleteTask(id)}}>Delet</button>
        </li>
    )
}

export default Todoitem