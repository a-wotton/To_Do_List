import React from "react";
import {ToDoForm} from './toDoForm.js';
import {ToDo} from './toDoItem.js';
import {useState} from 'react';

function ToDoList() {
    const [items, setItems] = useState([])

    function addToDo(item) {
        setItems([...items, {title: item, isCompleted: false}])
        console.log(items);
    }

    return(
        <div>
            <ToDoForm addToDo={addToDo}/>
            {items.map((item, index) => (
                <ToDo task={item} key={index}/>
            ))}
    
        </div>
    )
}

export default ToDoList;