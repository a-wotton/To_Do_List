import React from "react";
import {ToDoForm} from './toDoForm.js';
import {ToDo} from './toDoItem.js';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
uuidv4();

function ToDoList() {
    const [items, setItems] = useState([]);
    const [errmsg, SetErrmsg] = useState("") 

    function addToDo(item) {
        if (item.length < 30 && item.length > 1) {
            setItems([...items, {id: uuidv4(), title: item, isCompleted: false}])
            SetErrmsg("");
        } else if (item.length > 30) {
            SetErrmsg("Must be under 30 characters.");
        } else if (item.length < 1) {
            SetErrmsg("Must contain text.");
        }
    }

    function deleteToDo(id) {
        setItems(items.filter(item => item.id !== id));
    }


    // function handleChange() {
    //     setItems(items.filter(item => item.isCompleted = true));
    //     console.log(items);
    // }

    return(
        <div>
            <ToDoForm addToDo={addToDo}/>
            <p id="error">{errmsg}</p>
            {items.map((item, index) => (
                <ToDo task={item} key={index} deleteToDo={deleteToDo}/>
            ))}
    
        </div>
    )
}

export default ToDoList;