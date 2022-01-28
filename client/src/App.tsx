import React,{useState} from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import TodoItem from './components/TodoItem';

import Task from './models/task';


function App() {

  const [newTodoList , setNewTodoList] = useState<Task[]>([]);

  const addNewTodoListHandler = (newTodo:Task) =>{
    setNewTodoList((prevList)=>{
      return [newTodo,...prevList];
    })
  }

  const deleteTodo = (id:string)=>{
    setNewTodoList((prevList)=>{
      return prevList.filter((todo)=>todo.id!==id);
    })
  }

  return (
    <div className="body">
      <div style={{"backgroundColor":"tomato",width:"100%",height:"20px"}}></div>
      <div className="container">
        <NewTodo addTodo={addNewTodoListHandler}/>
        {newTodoList.map((todo)=>{
          return (
            <TodoItem todo={todo} deleteTodo={deleteTodo} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
