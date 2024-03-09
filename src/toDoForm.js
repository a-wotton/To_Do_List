import { useState, useEffect, onChange } from "react";  

export function ToDoForm({addToDo}) {
const [formData, setFormData] = useState("");

function handleSubmit(e) {
    e.preventDefault();
    addToDo(formData);
    setFormData("")
}

    return (
    <div>
    <header>
    <h1>To Do List:</h1>
    </header>
    <form id="add-todo-form">
    <label for="add">Title:</label>
    <div id="add-bar">
    <input 
    onChange={(e) => setFormData(e.target.value)}
    id="bar" name="add" type="text"/>
    <input onClick={handleSubmit} className="submit" type="submit" value="Add"></input>
    </div>
    </form>
    </div>
    )
 }
