import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function TopNav() {
  return (
    <Navbar
      bg="success"
      variant="dark"
      sticky="top"
      expand="true"
      className="flex-md-nowrap"
    >
      <Navbar.Brand as={NavLink} to="/" className="ms-3">
        BookClub Manager
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={NavLink} to="/settings" className="float-end me-3">
          Settings
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
