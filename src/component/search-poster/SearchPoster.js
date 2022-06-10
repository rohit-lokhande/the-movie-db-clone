import React from "react";
import { Button ,Row,Col,FormControl,InputGroup } from "react-bootstrap";
import './search-poster.css';

function SearchPoster() {
    return (
        <div className="search-background">

<h1>Welcome.</h1>
<h3>Millions of movies, TV shows and people to discover. Explore now.</h3>


<div className="search-bar">

<InputGroup>
<FormControl className="search-input" placeholder="Search Movie, TV shows"></FormControl>

    {/* <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text> */}
    <span className="search-button"> Search</span>

  </InputGroup>

{/* 
<FormControl className="search-input" placeholder="Search Movie, TV shows"></FormControl>
<Button>dssdf</Button> */}

</div>

        </div>
    )
}

export default SearchPoster;