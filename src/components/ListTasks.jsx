import React, { useEffect, useState } from "react";
import {Column} from "./Column";

export function ListTasks({ tasks, setTasks, taskStatuses }) {


    return (
        <div className="row">
            {taskStatuses.map((status) => {
                return (
                    <Column
                        key={status}
                        status={status}
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                )
            })}
        </div>
    );
}
