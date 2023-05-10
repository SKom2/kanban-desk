import {TaskCard} from "./TaskCard";

export function Column(props) {
    return (
        <div className="col">
            <h5 className="col-title">{props.status}</h5>
            {props.tasks
                .filter((task) => props.status === task.status)
                .map((task) => (
                    <TaskCard task={task}/>
                ))}
        </div>
    )
}