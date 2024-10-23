import React, { useState } from 'react';

const Todo = () => {
    const [todolist, setTodolist] = useState([]);

    const saveTodoList = (event) => {
        event.preventDefault(); // Prevent form submission

        const todoName = event.target.todoName.value; // Access input by name
        if (todoName && !todolist.includes(todoName)) {
            setTodolist([...todolist, todoName]); // Add new todo
            event.target.todoName.value = ''; // Clear input field
        } else {
            alert("ToDo Name already exists or is empty...");
        }
    };

    const deleteTodo = (indexToDelete) => {
        const finalData = todolist.filter((_, index) => index !== indexToDelete);
        setTodolist(finalData); // Update the state with the new list
    };

    return (
        <div className='App'>
            <h1>ToDo List</h1>
            <form onSubmit={saveTodoList}>
                <input type="text" name="todoName" placeholder='Enter Text here...' required />
                <button type="submit">Save</button> {/* Change button to type submit */}
            </form>
            <div className="outerDiv">
                <ul>
                    {todolist.map((value, index) => (
                        <ToDoListItems value={value} key={index} onDelete={() => deleteTodo(index)} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todo;

function ToDoListItems({ value, onDelete }) {
    return (
        <li>
            {value} <span onClick={onDelete} style={{ cursor: 'pointer', color: 'red' }}>&times;</span>
        </li>
    );
}
