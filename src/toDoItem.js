import { useReducer, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

export function ToDo({task, deleteToDo,}) {

    const [checked, setChecked] = useReducer(
        (checked) => !checked,
        false
      );

      function handleChange(e) {
        console.log(e);
      }

    return (
            <div onChange={handleChange} value={checked} id="item-list">
                <input onChange={setChecked} value={checked} className="checkbox" type="checkbox"></input>
                <span className="custom-box">
                </span>
                <p>{task.title}</p>
                <FaTrashCan onClick={() => deleteToDo(task.id)} className="icon"/>
            </div>
    )
}




