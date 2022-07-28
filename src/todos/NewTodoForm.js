import React, { useState } from "react";
import './NewTodoForm.css'

const NewTodoForm = () => {
    // state
    const [inputValue, setInputValue] = useState('')
    return (
        <div className="new-todo-form">
            <input
                type="text"
                placeholder="Type your new Todo"
                className="new-todo-form"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button className="new-todo-button">Create Todo</button>
        </div>
    )
}

export default NewTodoForm;