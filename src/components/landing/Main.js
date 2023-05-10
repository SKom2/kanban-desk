import {Column} from "./Column";
import "./Main.css"

export function Main(props) {
    return (
        <div className="Main root__container">
            <div className="row">
                {props.taskStatuses.map((status) => {
                    return (
                        <Column
                            key={status}
                            status={status}
                            tasks={props.tasks}
                        />
                    )
                })}
            </div>
        </div>
    )
}