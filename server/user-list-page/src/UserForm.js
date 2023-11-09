// UserForm.js
import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      addUser({ name });
      setName('');
    }
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
