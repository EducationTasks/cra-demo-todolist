import React from 'react';

const Title = ({name}) => (
    <div className="todo-label">
        <h3 className="todo-title">{name}'s TODO list</h3>
    </div>
);

export default Title;