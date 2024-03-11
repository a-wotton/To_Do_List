import { FaTrashCan } from "react-icons/fa6";

export function ToDo({task, deleteToDo}) {

    return (
            <div id="item-list">
                {task.title}
                <FaTrashCan onClick={() => deleteToDo(task.id)} className="icon"/>
            </div>
    )
}




