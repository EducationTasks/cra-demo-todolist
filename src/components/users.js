import React from 'react';

const User = ({user}) => (
    <div className="user-info">
        <p className="user-email"><u>E-mail:</u> {user.email}</p>
        <p className="user-phone"><u>Phone:</u> {user.phone}</p>
    </div>
);

export default User;