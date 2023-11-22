import React, { useState } from 'react';
import { Navbar, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import Sidebar from "./sidebar";
import MainDash from "./MainDash";
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar toujours visible pour les écrans moyens et plus grands */}
                <div className="col-md-3 col-lg-2 d-none d-md-block sidebar-collapse">
                    <Sidebar />
                </div>

                {/* Le reste de la Navbar */}
                <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div className="d-flex justify-content-between align-items-center" style={{ height: '4rem' }}>
                        <h1 className="me-3">Welcome back, Hicham</h1>
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
                       
                    </div>
                    <MainDash />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
