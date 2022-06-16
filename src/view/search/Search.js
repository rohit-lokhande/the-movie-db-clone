import React, { useEffect, useState } from "react";
import './style.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMediaUsingQuery } from "../../redux/action/search-action";
import dateFormat from 'dateformat';
import { useParams } from "react-router-dom";
import { height } from "@mui/system";

import { useNavigate } from "react-router-dom";

function Search(props) {

    let { query } = useParams();

    const searchState = useSelector((state) => state.search);
    const [filter, setFilter] = useState('movie');
    let navigate = useNavigate();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMediaUsingQuery(query));
    }, []);

    const onMovieSelect = () => {
        setFilter('movie');
    }
    const onvTSelect = () => {
        setFilter('tv');
    }

    const onMovieCardClick = (e) => {
        navigate(`/details/${filter}/${e.currentTarget.id}`);
    }

    return (
        <Container>
            {

                <div className="search-screen-container">
                    <div className="search-screen-left-pannel">
                        <div className="search-screen-left-pannel-header">
                            <h3>Search Results</h3>
                        </div>
                        <div style={{
                            paddingTop: '10px',
                            paddingBottom: '10px'
                        }}>

                            <div className={`left-pannel-menu ${filter === 'movie' ? 'pannel-selected' : ''}`} onClick={onMovieSelect}>
                                <h6>Movies</h6>
                                <span className="search-counter">
                                    {searchState.movies.length}

                                </span>
                            </div>

                            <div className={`left-pannel-menu ${filter === 'tv' ? 'pannel-selected' : ''}`} onClick={onvTSelect}>
                                <h6>TV Shows</h6>
                                <span className="search-counter">
                                    {searchState.tv.length}

                                </span>
                            </div>
                        </div>
                    </div>

                    <div>

                        {
                            (filter === 'tv') ? (searchState.tv.length > 0) ? searchState.tv.map((number, index) =>
                                <div className="media-details-verical-container" id={number.id} onClick={onMovieCardClick}>
                                    <div>
                                        <img
                                            className="image1"
                                            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${number.poster_path}`}
                                            alt="" />
                                    </div>
                                    <div className="media-details">
                                        <div className="media-header">
                                            <h6>{number.title}</h6>
                                            <p className="date"> {dateFormat(number.release_date, "mmmm d, yyyy")}</p>

                                        </div>
                                        <div className="desc">
                                            <p>{number.overview}</p>
                                        </div>
                                    </div>
                                </div>
                            ): <p>There are no movies that matched your query.

                            </p> : searchState.movies.map((number, index) =>
                                <div className="media-details-verical-container" id={number.id} onClick={onMovieCardClick}>
                                    <div>

                                        <img
                                            className="image1"
                                            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${number.poster_path}`}
                                            alt="" />

                                    </div>

                                    <div className="media-details">


                                        <div className="media-header">
                                            <h6>{number.title}</h6>
                                            <p className="date"> {dateFormat(number.release_date, "mmmm d, yyyy")}</p>

                                        </div>

                                        <div className="desc">
                                            <p>{number.overview}</p>
                                        </div>


                                    </div>


                                </div>
                            )
                        }


                    </div>



                </div>
            }

        </Container>
    )
}

export default Search;