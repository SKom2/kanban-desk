import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

export function CreateTask({tasks, setTasks}) {
    const [task, setTask] = useState({
        id: "",
        title: "",
        status: "Todo",
    })

    function handleSubmit(e) {
        e.preventDefault()

        setTasks((prev) => {
            const list =  [...prev, task];
            localStorage.setItem("tasks", JSON.stringify(list))
            return list;
        })

    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
        }}>
            <form onSubmit={handleSubmit}>
                <div style={{display: "flex", gap: "20px"}}>
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        style={{
                            width: "200px",
                        }}
                        value={task.name}
                        onChange={(e) => {
                            setTask({...task, id: uuidv4(), title: e.target.value});
                        }}
                    />
                    <button type="submit" className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    )
}
