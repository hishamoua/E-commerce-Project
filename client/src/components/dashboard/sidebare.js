import React, { useState } from 'react';
import { FaChartLine, FaRegFileAlt, FaUsers, FaRegNewspaper } from 'react-icons/fa';
import './sidebare.css'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Dropdown
} from 'reactstrap';

function Sidebare(args) {

    const [searchTerm, setSearchTerm] = useState('');


    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
      
    };
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='Navbar' {...args}>

        <NavbarBrand className='brand' href="/">Root</NavbarBrand>

        <NavItem>
             <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
            </NavItem>

        <UncontrolledDropdown nav inNavbar>
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="me-3">
                            <DropdownToggle color='light' caret>
                                Last 7 days
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Last 7 days</DropdownItem>
                                <DropdownItem>Last 30 days</DropdownItem>
                                <DropdownItem>This month</DropdownItem>
                                <DropdownItem>Last month</DropdownItem>
                            </DropdownMenu>
                             <Button color="primary">Large</Button>
                        </Dropdown>
            </UncontrolledDropdown>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>

            <NavItem>
              <NavLink href="/components/"> <FaChartLine className="icon" />
          Analytics</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/">
              <FaRegFileAlt className="icon" />
          Reports
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/">
              <FaUsers className="icon" />
          Users
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/">
              <FaRegNewspaper className="icon" />
          Posts
              </NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Sidebare;