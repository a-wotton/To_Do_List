import { useState } from "react";


function AddToDo() {
    return (
    <div>
    <header>
    <h1>To Do List:</h1>
    </header>
    <form id="add-todo-form">
    <label for="add">Title:</label>
    <div id="add-bar">
    <input id="bar" name="add" type="text"/>
     <input className="submit" type="submit" value="Add"></input>
    </div>
    </form>
    </div>
    )
}

export default AddToDo;