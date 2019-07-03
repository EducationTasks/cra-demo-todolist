import React from 'react';
import TodoItem from './TodoItem';
import User from './User';

const TodoList = ({ todoWidthUser }) => (
    <div className="todo-list__container">
        {todoWidthUser.map(item => (
            <div className="todo-list">
                <User userItem={item.user}/>
                <TodoItem todoItem={item}/>
            </div>
        ))}
    </div>
);

export default TodoList;