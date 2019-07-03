import React from 'react';
import '../App.css';
import TodoList from './TodoList';
import users from '../source/users';
import todos from '../source/todos';

const todoWidthUser = todos.map(item => ({
    ...item,
    user: users.find(user => user.id === item.userId),
}));

function App() {
    return (
        <TodoList todoWidthUser={todoWidthUser}/>
    );
}

export default App;


