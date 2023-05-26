import './App.css';
import {Header} from "./components/landing/Header";
import {useState} from "react";
import {CreateTask} from "./components/CreateTask";
import {ListTasks} from "./components/ListTasks"
import {v4 as uuidv4} from 'uuid';
import {useEffect} from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const taskStatuses = ["Todo", "Process", "Ready"]

const initialTasks = [
    {id: uuidv4(), status: "Todo", title: "Task 1",},
    {id: uuidv4(), status: "Process", title: "Task 2"},
    {id: uuidv4(), status: "Ready", title: "Task 3"},
    {id: uuidv4(), status: "Process", title: "Task 4"},
    {id: uuidv4(), status: "Todo", title: "Task 5"},
]

function App() {
    const [tasks, setTasks] = useState(initialTasks)

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);


    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App root__container">
                <Header />
                <CreateTask tasks={tasks} setTasks={setTasks} />
                <ListTasks tasks={tasks} setTasks={setTasks} taskStatuses={taskStatuses} />
            </div>
        </DndProvider>
    );
}

export default App;
