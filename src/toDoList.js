import React from "react";
import {ToDoForm} from './toDoForm.js';
import {ToDo} from './toDoItem.js';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
uuidv4();

function ToDoList() {
    const [items, setItems] = useState([])

    function addToDo(item) {
        setItems([...items, {id: uuidv4(), title: item, isCompleted: false}])
        console.log(items);
    }

    function deleteToDo(id) {
        setItems(items.filter(item => item.id !== id));
    }

    return(
        <div>
            <ToDoForm addToDo={addToDo}/>
            {items.map((item, index) => (
                <ToDo task={item} key={index} deleteToDo={deleteToDo}/>
            ))}
    
        </div>
    )
}

export default ToDoList;