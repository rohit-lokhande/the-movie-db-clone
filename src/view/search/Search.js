import React, { useEffect } from "react";
import './style.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMediaUsingQuery } from "../../redux/action/search-action";


function Search(props) {


    const searchState = useSelector((state) => state.search);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMediaUsingQuery('doctor'));
    }, []);




    return(
        <Container>
             {

searchState.data.map((number, index) =>
<h1>{index}</h1>
)
}

        </Container>
    )
}

export default Search;