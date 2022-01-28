import React from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import TodoItem from './components/TodoItem';

import Task from './models/task';


const Todos =[
  new Task("1","Learning React","Fri Jan 28 2022","rgb(254,200,112)","false"),
  new Task("2","Learning Node JS","Fri Jan 28 2022","rgb(253,154,112)","true"),
  new Task("3","Learning TypeScript","Fri Jan 28 2022","rgb(253, 122, 66)","false"),
  new Task("4","Learning Nest JS","Fri Jan 28 2022","rgb(142, 87, 253)","true"),
  new Task("5","Learning PostgreSql","Fri Jan 28 2022","rgb(0,211,254)","false"),
];

function App() {
  return (
    <div className="body">
      <div className="container">
        <NewTodo/>
        {Todos.map((todo)=>{
          return (
            <TodoItem todo={todo}/>
          );
        })}
      </div>
    </div>
  );
}

export default App;
