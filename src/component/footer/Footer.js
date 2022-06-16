import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import './style.css';
import logo from '../../assets/images/footer.svg'
import { useDispatch, useSelector } from 'react-redux';

function Footer(params) {

    const authState = useSelector((state) => state.auth);

    return (
        <div className="footer">
            <Container className="footer-container">

                <Row className="logo-container">
                    <img src={logo} height={94} className='footer-logo'></img>
                    <input type="button" value={`${authState.username != null ? `hi ${authState.username}`  : 'JOIN THE COMMUNITY' } `} className="btn-community" />
                </Row>

                <div className="footer-section">
                    <h5>THE BASICS</h5>
                    <a href="">About TMDB</a>
                    <a href="">Contact Us</a>
                    <a href="">Support Forums</a>
                    <a href="">API</a>
                    <a href="">System Status</a>
                </div>

                <div className="footer-section">
                    <h5>GET INVOLVED</h5>
                    <a href="">Contribution Bible</a>
                    <a href="">Add New Movie</a>
                    <a href="">Add New TV Show</a>
                </div>

                <div className="footer-section">
                    <h5>COMMUNITY</h5>
                    <a href="">Guidelines</a>
                    <a href="">Discussions</a>
                    <a href="">Leaderboard</a>
                    <a href="">Twitter</a>
                </div>

                <div className="footer-section">
                    <h5>LEGAL</h5>
                    <a href="">Terms of Use</a>
                    <a href="">API Terms of Use</a>
                    <a href="">Privacy Policy</a>
                </div>


            </Container>
        </div>
    )
}

export default Footer;