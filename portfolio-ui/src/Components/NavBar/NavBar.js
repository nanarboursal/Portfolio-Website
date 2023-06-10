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
import linkedin from "../../Images/linkedin-icon.svg";
import github from "../../Images/github-icon.svg";
import devpost from "../../Images/devpost-icon.svg";

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar className="user-nav">
                <NavbarBrand className="navbar-name" href="/">
                    <img
                        src={professionalPic}
                        width="40"
                        height="40"
                        style={{ marginRight: "10px" }}
                        className="d-inline-block align-top"
                        alt="portfolio logo"
                    />
                    {' '} Nanar Boursalian {' '}
                    <a href="https://www.linkedin.com/in/nanarboursalian/" target="_blank">
                        <img style={{ marginLeft: "20px" }} src={linkedin} width="35" height="35" />
                    </a>
                    {' '}
                    <a href="https://github.com/nanarboursal" target="_blank">
                        <img style={{ marginLeft: "10px" }} src={github} width="35" height="35" />
                    </a>
                    {' '}
                    <a href="https://devpost.com/nanarboursal" target="_blank">
                        <img style={{ marginLeft: "10px" }} src={devpost} width="35" height="35" />
                    </a>
                </NavbarBrand>
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