import React, { useState } from "react";
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";

import "./nav-bar.css";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div style={{
            display: 'block', width: 550, padding: 30
        }}>
            <Navbar color="dark" dark className="user-nav">
                <NavbarBrand href="/">Brand</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {/* <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Login</NavLink>
                        </NavItem> */}
                    </Nav>
                    <NavItem>Education</NavItem>
                </Collapse>
            </Navbar>
        </div >
    );
};

export default NavBar;