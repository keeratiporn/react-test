// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Shabruno buffet</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">หน้าหลัก</Nav.Link>
                        <Nav.Link href="/login">ล็อคอิน</Nav.Link>
                        <Nav.Link href="/about">เกี่ยวกับเรา</Nav.Link>
                        <Nav.Link href="/contact">ติดต่อเรา</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
