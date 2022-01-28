import React from 'react';
import Task from '../models/task';
import './TodoItem.css';
import starLogo from '../images/star.png';
import deleteLogo from '../images/delete (2).png';

const TodoItem:React.FC<{todo:Task,deleteTodo:(id:string)=>void}>=(props)=>{

  const deleteHandler =()=>{
    props.deleteTodo(props.todo.id);
  }

  return <div className="todo-item__body"style={{"backgroundColor":props.todo.color}}>
    <div className="todo-item__container">
      <div className="todo-item_content">
        {props.todo.important==="true" && <img className={"starLogo"} src={starLogo} alt="important"/>}
        <div onClick={deleteHandler} className="todo-item_delete"><img className="deleteLogo" src={deleteLogo} alt="delete"/></div>
        <div className="todo-item__task">{props.todo.task}</div>
        <div className="todo-item__date">{props.todo.date}</div>
      </div>
    </div>
  </div>;
}

export default TodoItem;
