import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ todos = [{ text: 'My first todo', id: 1 },
{ text: 'My second todo', id: 2 }] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <div key={todo.id} ><TodoListItem todo={todo} />
        </div>)}
    </div>
);

export default TodoList;