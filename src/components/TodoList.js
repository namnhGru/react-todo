import React, { useState, useEffect } from "react"
import { todoStyle } from "../constHelper"

export default function TodoList(props) {
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
    }
    return <p>Nothing to show</p>
}