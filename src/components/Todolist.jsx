import { useState,useEffect } from 'react'
import Todoitem from './Todoitem' 
import './Todolist.css'


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
    setTodos(newTodos)
}

const toggleTaskCompleted = (id) => {
      const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
      setTodos(newTodos)
}

const toggleAllCompleted = (id) => {
    const newTodos = todos.map(todo => todo.completed  == false ? {...todo, completed: !todo.completed} : todo)
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
    <input id="newTodo" type="text" placeholder="Skriv in dina föremål"/>
    <button onClick={() => {addTodo()}}>TRYCK</button>
    <button onClick={() => {deleteAll()}}>delet all</button>
    <button onClick={() => {toggleAllCompleted()}}>check all</button>
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