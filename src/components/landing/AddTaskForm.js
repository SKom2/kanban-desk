import "./AddTaskForm.css"

export function AddTaskForm() {
    return (
        <div className="AddTaskContainer">
            <p className="add-task-title">Новая задача</p>
            <form className="add-task-form">
                <input className="add-task-input"/>
                <button className="add-task-button"></button>
            </form>
        </div>
    )
}