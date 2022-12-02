import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap'



const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/">The Deadly Disease </NavbarBrand>
        
        <NavbarText className="d-none d-lg-block">    Lets talk about Sida 
</NavbarText>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar className="animate">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/" title="Go to landing page of site">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/story/" title="Find out more about Sida Story">Sida Story</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Syndrome/" title="Find out more information about Childhood Cancer">Syndrome</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/helpout/" title="Ways you can help out">Processing steps</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/news/" title="Find out current news or events relating to childhood cancer">news</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/" title="Some more information about us">About</NavLink>
            </NavItem>


          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;