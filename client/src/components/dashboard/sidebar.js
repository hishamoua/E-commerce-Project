import React, { useState } from 'react';
import { FaChartLine, FaRegFileAlt, FaUsers, FaRegNewspaper } from 'react-icons/fa';
import "./sidebar.css"

function Sidebar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    
  };

  return (
    <div className="sidebar  justify-content-center">
      <h1 className="brand">Roots</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul className="menu">
      <h6 className="menuH6">REPORTS</h6>
        <li className="menu-item">
          <FaChartLine className="icon" />
          Analytics
        </li>
        <li className="menu-item">
          <FaRegFileAlt className="icon" />
          Reports
        </li>
        <h6 className="menuH6">MANAGEMENT</h6> 
        <li className="menu-item">
          <FaUsers className="icon" />
          Users
        </li>
        <li className="menu-item">
          <FaRegNewspaper className="icon" />
          Posts
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
