import React, { useState } from 'react';

export default function Form() {
    const [toDos, setToDos] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = event.target.toDo.value;
        setToDos([...toDos, newTodo]);
    };

    const handleComplete = (index) => {
        const newTodo = [...toDos];
        newTodo[index] = <del>{newTodo[index]}</del>
        setToDos(newTodo);
    };

    const handleDelete = (index) => {
        const newToDo = [...toDos];
        newToDo.splice(index, 1);
        setToDos(newToDo);
    };

    return (
        <div>
            <h1>To do List:</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='toDo' placeholder='Add Task Here' required />
                <button type='submit'>Add Task</button>
            </form>
            <ul>
                {toDos.map((toDo, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            onChange={() => handleComplete(index)}
                        />
                        {toDo}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}