import { useState, useEffect, onChange } from "react";  

export function ToDoForm({addToDo}) {
const [formData, setFormData] = useState("");

function handleSubmit(e) {
    e.preventDefault();
    addToDo(formData);
    setFormData("");
}

    return (
    <div id="container">
    <header>
    <h1>To Do List:</h1>
    </header>
    <form id="add-todo-form">
    <div id="add-bar">
    <input 
    onChange={(e) => setFormData(e.target.value)}
    id="bar" name="add" type="text" value={formData} placeholder="Add a Task"/>
    <input onClick={handleSubmit} className="submit" type="submit" value="Add +"></input>
    </div>
    </form>
    </div>
    )
 }
