import { Container, IconButton, Input, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { Nav, Navbar, Col, Row, Button, FormControl } from "react-bootstrap";
import '../../styles/navbar.css'
import NavDropdown, { DropdownItem } from "./NavDropdown";
import logo from '../../assets/images/logo.svg'
import plus from '../../assets/images/plus.svg'

import { GoPlus, GoSearch, GoSquirrel } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md'

function NavBar() {


    const [showSearch, setShowSearch] = useState(true);

    const onSearchClick = () => {
        setShowSearch(!showSearch);
    }


    return (

        <Row>
            <Navbar collapseOnSelect className="navbar">
               <Container className="nav-container">
               <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="154"
                        height="20"
                        alt="logo"
                    /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown
                            title='Movies'
                            links={
                                [
                                    new DropdownItem('Popular', '#'),
                                    new DropdownItem('Now Playing', '#'),
                                    new DropdownItem('Upcoming', '#'),
                                    new DropdownItem('Top Rated', '#')
                                ]} />

                        <NavDropdown
                            title='Movies'
                            links={
                                [
                                    new DropdownItem('Popular', '#'),
                                    new DropdownItem('Now Playing', '#'),
                                    new DropdownItem('Upcoming', '#'),
                                    new DropdownItem('Top Rated', '#')
                                ]} />
                        <NavDropdown
                            title='TV Shows'
                            links={
                                [
                                    new DropdownItem('Popular', '#'),
                                    new DropdownItem('Airing Today', '#'),
                                    new DropdownItem('On TV', '#'),
                                    new DropdownItem('Top Rated', '#')
                                ]} />
                        <NavDropdown
                            title='People'
                            links={
                                [
                                    new DropdownItem('Popular People', '#')
                                ]} />
                        <NavDropdown
                            title='More'
                            links={
                                [
                                    new DropdownItem('Discussions', '#'),
                                    new DropdownItem('Leaderboard', '#'),
                                    new DropdownItem('Support', '#'),
                                    new DropdownItem('API', '#')
                                ]} />



                    </Nav>
                    <Nav>
                        <Nav.Link> <GoPlus
                            color="#FFFFFF"
                            size={24}
                        /></Nav.Link>
                        <Nav.Link >Login</Nav.Link>
                        <Nav.Link >Join TMDB</Nav.Link>

                        <Nav.Link> {
                            showSearch ? <MdOutlineClose
                                color="white"
                                size={24}
                                onClick={onSearchClick} /> : <GoSearch
                                color="blue"
                                size={24}
                                onClick={onSearchClick} />
                        }  </Nav.Link>



                    </Nav>
                </Navbar.Collapse>
               </Container>

            </Navbar>

            {
                showSearch && (
                    <Col className="search-container">
                       <Container className="nav-container">
                       <GoSearch />
                        <FormControl className="search-input" placeholder="Search Movie, TV shows"></FormControl>
                        <MdOutlineClose />
                       </Container>
                    </Col>)
            }

        </Row>
    )
}

export default NavBar;