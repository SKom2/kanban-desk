import "./TaskCard.css"
import {useForm} from "../../context/useForm";
import {useEffect, useRef, useState} from "react";
import editImage from "../../images/Edit.svg"
import deleteImage from "../../images/Delete.svg"
import {useDrag} from "react-dnd";

export function TaskCard({setTasks, tasks, task, ...props}) {
    const inputRef = useRef(null);
    const buttonRef = useRef(null);
    const {values, handleChange, setValues} = useForm({
        task: task.title
    })
    const [isEditing, setIsEditing] = useState(false)
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: task.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    function handleClick(evt) {
        evt.preventDefault()
        if (isEditing) {
            setIsEditing(false)
            inputRef.current.blur();
            inputRef.current.disabled = true;
        } else {
            setIsEditing(true)
            inputRef.current.disabled = false;
            inputRef.current.focus();
        }
    }

    function handleDelete(id) {
        const updatedTasks = tasks.filter((t) => t.id !== id)
        setTasks(updatedTasks)
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    return (
        <div
            ref={drag}
            className={`card mb-3 ${isDragging ? "opacity-25" : "opacity-100"}`}
        >
            <form className="card-body">
                <input
                    disabled
                    type="text"
                    className={`card-input`}
                    name="task"
                    value={values.task}
                    onChange={handleChange}
                    ref={inputRef}
                ></input>
                <div className="card-buttons" style={{
                    display: "flex",
                    gap: "5px"
                }}>
                    <button
                        type="submit"
                        style={{
                            opacity: "0",
                            transition: "opacity .1s linear",
                            border: "none",
                            alignSelf: "center",
                            width: "25px",
                            height: "25px",
                            background: `#D6E7FF url(${editImage}) center/20px no-repeat`,
                            borderRadius: "10%",
                            textAlign: "center"
                        }}
                        className={`card-button ${isEditing ? 'card-button-active' : ''}`}
                        ref={buttonRef}
                        onClick={handleClick}
                    />
                    <button
                        type="button"
                        style={{
                            opacity: "0",
                            transition: "opacity .1s linear",
                            border: "none",
                            alignSelf: "center",
                            width: "25px",
                            height: "25px",
                            background: `#D6E7FF url(${deleteImage}) center/20px no-repeat`,
                            borderRadius: "10%",
                            textAlign: "center"
                        }}
                        className={`card-button ${isEditing ? 'card-button-active' : ''}`}
                        onClick={() => handleDelete(task.id)}
                    />
                </div>
            </form>
        </div>
    )
}
