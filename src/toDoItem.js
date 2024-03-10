import { FaTrashCan } from "react-icons/fa6";

export function ToDo({task}) {
    return (
        <ul id="item-list">
            <li>
                {task.title}
                <FaTrashCan className="icon"/>
            </li>
        </ul>
    )
}


