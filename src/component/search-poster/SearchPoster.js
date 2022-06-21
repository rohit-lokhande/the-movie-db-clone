import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import './style.css';
import { useNavigate } from "react-router-dom";

function SearchPoster() {
    const [query,setQuery] = useState();
    let navigate = useNavigate();

    const onQueryUpdate = (e) => {
setQuery(e.target.value);
    }

    const onSearchClick = () =>{
        if(query != null && query.length > 0){
            navigate(`search/${query}`);
        }
    }


    return (
        <div className="search-background">
            <h2>Welcome.</h2>
            <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
            <div className="search-bar">
                <InputGroup>
                    <FormControl className="search-input" onChange={onQueryUpdate} placeholder="Search for a movie, tv show, person......"></FormControl>
                    <input type="button" value="Search"  className="btn-search" onClick={onSearchClick}/>
                </InputGroup>
            </div>
        </div>
    )
}

export default SearchPoster;