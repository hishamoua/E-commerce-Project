import React from 'react';
import './App.css';
import UserManagementPage from './UserManagement';



function App() {
  return (
    <div className="app-container">
      <h1 className="app-header">Welcome to User Management</h1>
      <div className="user-management">
        <UserManagementPage />
      </div>
    </div>
  );
}

export default App;
