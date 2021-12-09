import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList"
import SettingModal from "./components/SettingModal";

export default function TodoApp() {
    const lsSoe = localStorage.getItem("soe")
    const initTodoList = localStorage.getItem("todolist")
    const [soe, setSoe] = useState( !!lsSoe ? JSON.parse(lsSoe) : false)
    const [showSetting, setShowSetting] = useState(false)
    const [todoList, setTodoList] = useState( soe && !!initTodoList? JSON.parse(initTodoList) : [])
    const [newTodo, setNewTodo] = useState('')

    useEffect(() => {
        localStorage.setItem("soe", JSON.stringify(soe))
        localStorage.setItem("todolist", JSON.stringify(todoList))
    })

    function handleSoeChange(e) {
        let soeChange = e.target.checked
        setSoe(soeChange)
        localStorage.setItem("soe", JSON.stringify(soeChange))
        if (e.target.checked) {
            localStorage.setItem("todolist", JSON.stringify(todoList))
        } else {
            localStorage.setItem("todolist", JSON.stringify([]))
        }
    }

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
            const { text } = todo
            if (index === i) {
                acc.push({text, strike: true})
                return acc
            }
            acc.push(todo)
            return acc
        }, [])
        setTodoList(newTodoList)
    }

    function handleSettingClicked() {
        setShowSetting(!showSetting)
    }

    return (
        <div>
            <p>Todo List</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="New todo" onChange={e => setNewTodo(e.target.value)}/>
                <button>Submit</button>
            </form>
            <TodoList todoList={todoList} handleDelete={handleDelete} handleStrike={handleStrike}></TodoList>
            <button onClick={handleSettingClicked}>Setting</button>
            {
             !!showSetting ? <SettingModal todoList={todoList} handleSoeChange={handleSoeChange} soe={soe}></SettingModal> : null
            }
        </div>
    )
}

