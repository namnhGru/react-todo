import React, { useState, useEffect } from "react";

export default function TodoApp() {
    let [todoList, setTodoList] = useState([])
    let [newTodo, setNewTodo] = useState('')

    function handleSubmit() {
        let newTodoList = [...todoList, { text: newTodo }]
        setTodoList(newTodoList) 
    }

    function handleDelete(index) {
        let newTodoList = todoList.filter((todo, i) => index !== i)
        setTodoList(newTodoList)
    }
    return (
        <div>
            <p>Todo List</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="New todo" onChange={e => setNewTodo(e.target.value)}/>
                <button>Submit</button>
            </form>
            <TodoList todoList={todoList} handleDelete={handleDelete}></TodoList>
        </div>
    )
}


function TodoList(props) {
    if (props.todoList.length) {
        return (
            <ul>
                {props.todoList.map((todo, i) => (
                    <li key={i}>
                        {todo.text}
                        <button onClick={() => props.handleDelete(i)}>X</button>
                    </li>

                ))}
            </ul>
        )
    } else {
        return <p>Nothing to show</p>
    }
}