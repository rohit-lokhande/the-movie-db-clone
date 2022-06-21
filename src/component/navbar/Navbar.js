import { Container } from "@mui/material";
import React, { useState } from "react";
import { Nav, Navbar, Col, Row, FormControl } from "react-bootstrap";
import './style.css'
import NavDropdown, { DropdownItem } from "./NavDropdown";
import logo from '../../assets/images/logo.svg'

import { GoPlus, GoSearch } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../redux/action/auth-action";
function NavBar() {

    const [showSearch, setShowSearch] = useState(false);
    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();


    const onSearchClick = () => {
        setShowSearch(!showSearch);
    }


    const onLogoutClick = () => {
        dispatch(logout());
    }


    return (
        <Row>
            <Navbar collapseOnSelect className="navbar">
                <Container className="container">

                    <Navbar.Brand href="/">
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
                                links={[
                                    new DropdownItem('Popular', '/list/movie/popular'),
                                    new DropdownItem('Now Playing', '/list/movie/now_playing'),
                                    new DropdownItem('Upcoming', '/list/movie/upcoming'),
                                    new DropdownItem('Top Rated', '/list/movie/top_rated')
                                ]} />

                            <NavDropdown
                                title='TV Shows'
                                links={[
                                    new DropdownItem('Popular', '/list/tv/popular'),
                                    new DropdownItem('Airing Today', '/list/tv/airing_today'),
                                    new DropdownItem('On TV', '/list/tv/on_the_air'),
                                    new DropdownItem('Top Rated', '/list/tv/top_rated')
                                ]} />

                            <NavDropdown
                                title='People'
                                links={[
                                    new DropdownItem('Popular People', '#')
                                ]} />

                            <NavDropdown
                                title='More'
                                links={[
                                    new DropdownItem('Discussions', '/dicussion'),
                                    new DropdownItem('Leaderboard', '#'),
                                    new DropdownItem('Support', '#'),
                                    new DropdownItem('API', '#')
                                ]} />
                        </Nav>

                        <Nav>

                            {
                                (authState.username != null) ? loginUserView(authState.username, onLogoutClick) : <Nav.Link href="/login">Login</Nav.Link>
                            }


                            <Nav.Link href="/signup">Join TMDB</Nav.Link>
                            {/* <Nav.Link> {
                                showSearch ? <MdOutlineClose
                                    color="white"
                                    size={24}
                                    onClick={onSearchClick} /> : <GoSearch
                                    color="blue"
                                    size={24}
                                    onClick={onSearchClick} />
                            }  </Nav.Link> */}

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

function loginUserView(username, onClick) {

    return (
        <div className="dropdown">
            <Nav.Link className="dropbtn"><div style={{
                backgroundColor: 'rgb(var(--tmdbLogoRed))',
                borderRadius: '40px',
                padding: '8px',
                alignItems: 'center',
                textAlign: 'center',
                width: '40px',
                fontWeight: 600,
                color: 'white'
            }} >
                <a>{username[0]}</a>
            </div></Nav.Link>
            <div className="dropdown-content">
                <a onClick={onClick}>Logout</a>

            </div>
        </div>
    )



}

export default NavBar;