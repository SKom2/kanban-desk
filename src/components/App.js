import './App.css';
import {CurrentUserContext} from "../contexts/CurrentUser";
import {Main} from "./landing/Main";
import {Header} from "./landing/Header";
import {useState} from "react";

const taskStatuses = ["Backlog", "Process", "Ready", "Bin"]

const initialTasks = [
    {id: 1, status: "Backlog", title: "Task 1",},
    {id: 2, status: "Process", title: "Task 2"},
    {id: 3, status: "Ready", title: "Task 3"},
    {id: 4, status: "Bin", title: "Task 4"},
    {id: 5, status: "Backlog", title: "Task 5"},
]

function App() {
    const [tasks, setTasks] = useState(initialTasks)

    return (
        <CurrentUserContext.Provider value={tasks}>
            <div className="App">
                <Header />
                <Main
                    tasks={tasks}
                    taskStatuses={taskStatuses}
                />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
