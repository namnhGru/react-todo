import React from "react"
import { todoStyle } from "../constHelper"

export default function TodoList(props) {
    if (props.todoList.length) {
        return (
            <ul>
                {props.todoList.map((todo, i) => (
                    <li key={i} style={todo.strike ? todoStyle : null} className="flex flex-row">
                        {/* <button className="border-2" onClick={() => props.handleDelete(i)}>X</button>
                        <button onClick={() => props.handleStrike(i)}>Strike</button> */}
                        <p className="tExt45xl border-b w-168 font-extralight">{todo.text}</p>
                    </li>
                ))}
            </ul>
        )
    }
    return <p className="tExt45xl w-168 font-extralight">Nothing to show... :(</p>
}