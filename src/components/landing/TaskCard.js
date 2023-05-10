import "./TaskCard.css"
export function TaskCard({task}) {
    return (
        <div className="card mb-3" key={task.id}>
            <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <a href="#" className="card-button"></a>
            </div>
        </div>
    )
}