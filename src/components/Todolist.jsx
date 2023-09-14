import 'bootstrap/dist/css/bootstrap.css';
import { useState,useEffect } from 'react'
import Todoitem from './Todoitem';
// import NewTodo from './NewTodo'


function Todolist(){
const[todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || [];
});


useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

const addTodo = () => {
    const newTodo = document.getElementById('newTodo').value
    if (newTodo === '') return
    let newTodos = [...todos, { id: todos.length + 1, label: newTodo, completed: false}]
    if(todos.length > 0){
    newTodos = [...todos, {id: todos[todos.length-1].id+1, label: newTodo, completed: false}]
    }
    document.getElementById('newTodo').value = ''
    document.getElementById("newTodo").focus();
    var input = document.getElementById("newTodo");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("myBtn").click();
        }
      });
    setTodos(newTodos)
}


  

const toggleTaskCompleted = (id) => {
      const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
      setTodos(newTodos)

}

const toggleAllCompleted = (id) => {
    const newTodos = todos.map(todo => todos[0].completed === false ? {...todo, completed: true } : {...todo, completed: false })
    setTodos(newTodos)
}

const deleteTask = (id) => {
   const newTodos = todos.filter(todo => {
    return todo.id !== id})
   setTodos(newTodos);
}

const deleteAll = (id) => {
    const newTodos = todos.filter(todo => {
     return id !== id})
    setTodos(newTodos);
}

 return (
    <>
    <div className='addTasks'>
      <input id="newTodo" type="text" placeholder="Skriv in dina föremål"/>
      <br/>
            <button id='myBtn' className="btn btn-primary d-inline-flex align-items-center" onClick={() => { addTodo() }}>Skriv</button>
            <button className="btn btn-primary d-inline-flex align-items-center" onClick={() => { deleteAll() }}>Delete all</button>
            <button className="btn btn-primary d-inline-flex align-items-center" onClick={() => { toggleAllCompleted() }}>Check/Uncheck all</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) =>
                    <Todoitem
                        key={index}
                        id={todo.id}
                        label={todo.label}
                        completed={todo.completed}
                        toggleTaskCompleted={toggleTaskCompleted}
                        deleteTask={deleteTask}
                    />
                )}
            </ul>
    </>
  )

}
export default Todolist