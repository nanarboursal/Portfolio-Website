import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from "reactstrap";

import "./nav-bar.css";
import professionalPic from "../../Images/professional.png";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark className="user-nav">
                <NavbarBrand className="navbar-name" href="/"><img
                    src={professionalPic}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="portfolio logo"
                /> {' '} Nanar Boursalian</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    </Nav>
                    <NavItem className="item-nav">Education</NavItem>
                </Collapse>
            </Navbar>
        </div >
    );
};

export default NavBar;