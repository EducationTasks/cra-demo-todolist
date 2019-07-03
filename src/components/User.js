import React from 'react';

const User = ({userItem}) => (
    <div className="user-info">
        <p className="user-name"> {userItem.name}</p>
    </div>
);

export default User;