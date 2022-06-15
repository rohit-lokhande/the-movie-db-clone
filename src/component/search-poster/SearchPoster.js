import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import './style.css';

function SearchPoster() {
    return (
        <div className="search-background">
            <h2>Welcome.</h2>
            <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
            <div className="search-bar">
                <InputGroup>
                    <FormControl className="search-input" placeholder="Search for a movie, tv show, person......"></FormControl>
                    <span className="search-button"> Search</span>
                </InputGroup>
            </div>
        </div>
    )
}

export default SearchPoster;