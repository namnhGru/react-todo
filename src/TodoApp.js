import React, { useState, useEffect } from "react";
const todoStyle = {
    color: 'red',
    textDecoration: "line-through"
}

export default function TodoApp() {
    const [todoList, setTodoList] = useState([])
    const [newTodo, setNewTodo] = useState('')

    function handleSubmit() {
        const newTodoList = [...todoList, { text: newTodo, strike: false }]
        setTodoList(newTodoList) 
    }

    function handleDelete(index) {
        const newTodoList = todoList.filter((todo, i) => index !== i)
        setTodoList(newTodoList)
    }

    function handleStrike(index) {
        const newTodoList = todoList.reduce((acc, todo, i) => {
            const { text, strike } = todo
            if (index === i) {
                acc.push({text, strike: true})
                return acc
            }
            acc.push(todo)
            return acc
        }, [])
        setTodoList(newTodoList)
    }

    return (
        <div>
            <p>Todo List</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="New todo" onChange={e => setNewTodo(e.target.value)}/>
                <button>Submit</button>
            </form>
            <TodoList todoList={todoList} handleDelete={handleDelete} handleStrike={handleStrike}></TodoList>
        </div>
    )
}

function TodoList(props) {
    if (props.todoList.length) {
        return (
            <ul>
                {props.todoList.map((todo, i) => (
                    <li key={i} style={todo.strike ? todoStyle : null}>
                        <button onClick={() => props.handleDelete(i)}>X</button>
                        <button onClick={() => props.handleStrike(i)}>Strike</button>
                        {todo.text}
                    </li>

                ))}
            </ul>
        )
    } else {
        return <p>Nothing to show</p>
    }
}