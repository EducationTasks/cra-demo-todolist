import React from 'react';
import todos from '../source/todos';

const TodoList = ({userId}) => (
    <div className="todo-list">
        <ol>
            {todos.filter(todo => todo.userId === userId).map(todo => (
                <li>
                    <label htmlFor="todo">
                        <input type="checkbox" checked={todo.completed}/>
                         {todo.title}
                    </label>
                </li>
            ))}
        </ol>
    </div>
);

export default TodoList;