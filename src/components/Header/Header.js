import React, { Component } from 'react'
import logo from '../images/icons/logo-sm.png';
import search from '../images/icons/search-icon-sm.png';
import cart from '../images/icons/cart-sm.png';
import HeaderLink from './HeaderLink';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";



class Header extends Component{
  
	render(){
		return(
	
			<div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
			<div className="container">
			  <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Brand href="/">
				  <img src={logo} alt="" />
				</Navbar.Brand>
	  
				<Navbar.Collapse id="responsive-navbar-nav">
				  <Nav className="nav-justified w-100 nav-fill">
					<Nav.Link className="nav-link" href="#">
					  Mac
					</Nav.Link>
					<Nav.Link href="/#">iphone</Nav.Link>
					<Nav.Link href="/#">ipad</Nav.Link>
					<Nav.Link href="/#">watch</Nav.Link>
					<Nav.Link href="/#">tv</Nav.Link>
					<Nav.Link href="/#">Music</Nav.Link>
					<Nav.Link href="/#">Support</Nav.Link>
					<Nav.Link href="/#">
					  <img src={search} alt="" />
					</Nav.Link>
					<Nav.Link href="/#">
					  <img src={cart} alt="" />
					</Nav.Link>
				  </Nav>
				</Navbar.Collapse>
			  </Navbar>
			</div>
		  </div>
   )
}
	}
	
export default Header;