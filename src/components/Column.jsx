import {TaskCard} from "./landing/TaskCard";
import {useState} from "react";
import {useDrag, useDrop} from "react-dnd";

export function Column({setTasks, tasks, status, ...props}) {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addItemToSection = (id) => {
        setTasks((prev) => {
            const mTasks = prev.map(t => {
                if (t.id === id){
                    return {...t, status: status}
                }
                return t;
            })
            localStorage.setItem("tasks", JSON.stringify(mTasks))

            return mTasks;
        })
    }

    return (
        <div ref={drop} className={`col rounded p-2 ${isOver ? "bg-primary-subtle" : ''}`}>
            <h5 className="col-title">{status}</h5>
            {tasks
                .filter((task) => status === task.status)
                .map((task) => (
                    <TaskCard
                        status={status}
                        setTasks={setTasks}
                        tasks={tasks}
                        task={task}
                        key={task.id}/>
                ))}
        </div>
    )
}
