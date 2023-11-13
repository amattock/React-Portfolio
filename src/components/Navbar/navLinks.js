import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBIcon,} from "mdbreact";

function Navbar() {
  return (
    <MDBNavbar
      color="orange"
      dark
      expand="md"
      style={{ width: "100%" }}
    >
      <MDBNavbarBrand className="white-text" md="12">
       Alex Mattock's Portfolio
      </MDBNavbarBrand>
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="/about">
            <MDBIcon className="mr-1" />
            About Me
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="/portfolio">
            <MDBIcon className="mr-1" />
           My Portfolios
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="/resume">
            <MDBIcon  className="mr-1" />
            My Resume
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="/contact">
            <MDBIcon  className="mr-1" />
            Contact Me
          </MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  );
}

export default Navbar;
