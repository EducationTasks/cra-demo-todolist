import React from 'react';
import '../App.css';
import TodoList from './todo_list';
import Title from './title';
import User from './users';
import users from '../source/users';



function App() {
    return (
        <div className="todo-container">
            <h1>TODO List</h1>
            {users.map(user => (
                <section className="todo-block">
                     <Title name={user.name}/>
                     <User user={user}/>
                     <TodoList userId={user.id}/>
                </section>
            ))}
        </div>
    );
}

export default App;


