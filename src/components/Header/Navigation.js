import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)
  return (
    <Navbar color="light" light expand="md">
      <div className="container">
        <NavbarBrand href="/">Brand</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink activeClassName="selected" className="nav-link" to="/">Home</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink
                activeClassName="selected"
                className="nav-link" to="/topics">Topics
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation