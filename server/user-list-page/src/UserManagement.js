// UserManagementPage.js
import React, { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <h1>User Management Page</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
};

export default UserManagementPage;
