import React, { useState,useRef } from 'react';
import './NewTodo.css';
import Task from '../models/task';

const NewTodo:React.FC<{addTodo:(newTask:Task)=>void}> = (props) => {
    const [color, setColor] = useState<string>("");
    const textInput = useRef<HTMLInputElement>(null);
    const checkInput = useRef<HTMLInputElement>(null);

    const taskSubmitHandler = () => {
        if(!textInput.current!.value || !color)return ;
        const newTask= new Task(
            Math.floor(Math.random()*10000000000000 ).toString(),
            textInput.current!.value,
            new Date().toDateString(),
            color,
            checkInput.current?.checked?"true":"false"
        );
            console.log(newTask);
            console.log(checkInput);
            props.addTodo(newTask);
    }


    return <div className="new-todo_body">
        <div className="new-todo_container">
            <div className="new-todo_content">
                <h1 style={{color:"rgb(105, 105, 105)"}}>NOTE</h1>
                
                <input ref={textInput} type="text" placeholder='task' className="new-todo_input-text" />
                <div className="new-todo_checkbox">
                    <label className="new-todo_label" style={{color:"rgb(105, 105, 105)"}}>Important</label>
                    <input type="checkbox" ref={checkInput} className="new-todo_input-check" />
                </div>
                
                <div className="new-todo-colors">
                    <button onClick={() => { setColor("rgb(254,200,112)") }} className='color1 new-todo_color-button'></button>
                    <button onClick={() => { setColor("rgb(253,154,112)") }} className='color2 new-todo_color-button'></button>
                    <button onClick={() => { setColor("rgb(227,236,143)") }} className='color3 new-todo_color-button'></button>
                    <button onClick={() => { setColor("rgb(181,145,251)") }} className='color4 new-todo_color-button'></button>
                    <button onClick={() => { setColor("rgb(0,211,254)") }} className='color5 new-todo_color-button'></button>
                </div>
                <button onClick={taskSubmitHandler} className="submit">submit</button>
            </div>
        </div>
    </div>;
}

export default NewTodo;
