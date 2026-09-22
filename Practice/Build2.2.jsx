import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    function addTask() {
        const newTask = input;
        setTasks([...tasks, newTask])
    }

    function deleteTask(index) {
        setTasks(tasks.filter((t, i) => i != index))
    }

    return (
        <>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <p>Total: {tasks.length}</p>
            <button onClick={addTask}>Add task</button>
            {tasks.map((t, index) => <li key={index}>{t}<button onClick={() => deleteTask(index)}>Delete task</button></li>)}
        </>
    )
}