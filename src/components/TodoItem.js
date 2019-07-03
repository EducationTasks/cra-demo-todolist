import React from 'react';

const TodoItem = ({todoItem}) => (
    <div className="todo-item">
        <input className="todo-item_cb" type="checkbox" checked={todoItem.completed} id="checkbox_id"/>
        <label htmlFor="checkbox_id">{todoItem.title}</label>
    </div>
);

export default TodoItem;

