import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Nav className='mr-auto header'>
        <Nav.Item>
          <NavLink to='/'>Home</NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink to='/posts'>Post</NavLink>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Header;
