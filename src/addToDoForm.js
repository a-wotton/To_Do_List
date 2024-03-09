import { useState, useEffect, onChange } from "react";

function AddToDo() {
    const [formData, setFormData] = useState({title:""}) 

    function handleTitleChange(event) {
       setFormData({title: event.target.value})
    }
   
    return (
    <div>
    <header>
    <h1>To Do List:</h1>
    </header>
    <form id="add-todo-form">
    <label for="add">Title:</label>
    <div id="add-bar">
    <input value={formData.title} onChange={handleTitleChange}  id="bar" name="add" type="text"/>
    <input className="submit" type="submit" value="Add"></input>
    </div>
    </form>
     <ul id="to-do-list">
     <li>{formData.title}</li> 
     </ul>
    </div>
    )
 }

export default AddToDo;