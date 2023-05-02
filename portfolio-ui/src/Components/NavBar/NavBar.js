import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";

import "./nav-bar.css";
import professionalPic from "../../Images/professional.png";

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar className="user-nav">
                <NavbarBrand className="navbar-name" href="/"><img
                    src={professionalPic}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="portfolio logo"
                /> {' '} Nanar Boursalian</NavbarBrand>
                {/* <NavbarToggler onClick={toggleNavbar} /> */}
                {/* <Collapse  isOpen={!collapsed} navbar> */}
                <Nav className="the-nav ml-auto" navbar>
                    <NavItem className="item-nav">
                        <NavLink href="#education">Education</NavLink>
                    </NavItem>
                    <NavItem className="item-nav">
                        <NavLink href="#skills">Skills</NavLink>
                    </NavItem>
                    <NavItem className="item-nav">
                        <NavLink href="#experience">Experience</NavLink>
                    </NavItem>
                    <NavItem className="item-nav">
                        <NavLink href="#projects">Projects</NavLink>
                    </NavItem>
                </Nav>
                {/* </Collapse> */}
            </Navbar>
        </div >
    );
};

export default NavBar;