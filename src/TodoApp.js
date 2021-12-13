import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList"
import SettingModal from "./components/SettingModal";
import add from "./assets/add.png"
import settings from "./assets/settings.png"

export default function TodoApp() {
    const [soe, setSoe] = useState(null)
    const [showSetting, setShowSetting] = useState(false)
    const [todoList, setTodoList] = useState([])
    const [newTodo, setNewTodo] = useState('')

    //componentDidMount
    // Bài học: luôn luôn init state bằng giá trị mặc định, sau đó fetch khi mount thì sẽ tốt hơn
    useEffect(() => {
        const lsSoe = JSON.parse(localStorage.getItem("soe"))
        const initTodoList = JSON.parse(localStorage.getItem("todolist"))
        setSoe(!!lsSoe ? lsSoe : false)    
        setTodoList(!!lsSoe && initTodoList ? initTodoList : [])
    }, [])

    //componentDidUpdate
    useEffect(() => {
        localStorage.setItem("soe", JSON.stringify(soe))
        localStorage.setItem("todolist", JSON.stringify(todoList))
    },[soe, todoList])

    function handleSubmit(e) {
        e.preventDefault()
        const newTodoList = [...todoList, { text: newTodo, strike: false }]
        setTodoList(newTodoList) 
        e.target.reset()
        setNewTodo('')
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
        <div className="font-google pt-10 grid grid-cols-3 gap-1 bgtext before:bg-cDarkC">
            <div className="pl-36 col-span-2 grid grid-rows-2">
                <div className="row-span-1">
                    <p className="text-18xl h-80 ">Todo.</p>
                    <form className="mt-20 h-20 flex-row flex" onSubmit={handleSubmit}>
                        <div><input className="h-full w-168 border-2 rounded-full border-cDarkC pl-8 tExt45xl font-light bg-white" type="text" placeholder="What should you do today?" onChange={e => setNewTodo(e.target.value)}/></div>
                        <div><button className="flex ml-3.5 h-full w-28 border-2 border-cDarkA rounded-full bg-white"><img className="w-14 h-14 m-auto" src={add}></img></button></div>
                    </form>
                </div>
                <div className="row-span-1 mt-14">
                    <TodoList todoList={todoList} handleDelete={handleDelete} handleStrike={handleStrike}></TodoList>
                </div>
            </div>
            <div className="col-span-1 relative">
                <div className="absolute right-36 top-0 ">
                    <button className="flex border-2 rounded-full bg-white text-cDarkA h-20 w-28 border-cDarkA" onClick={handleSettingClicked}>
                        <img className="h-14 m-auto w-14" src={settings}></img>
                    </button>
                </div>
                {
                !!showSetting ? <SettingModal className="row-span-1" todoList={todoList} handleSoeChange={e => setSoe(e.target.checked)} soe={soe}></SettingModal> : null
                }
            </div>
        </div>
    )
}

