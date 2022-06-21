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

        <div className="content">
        <div className="content-wrapper">
        {
                <div className="split-container">
                    <div className="left-pannel">
                        <div className="container-with-header">
                            <div className="header">
                                <h3>Search Results</h3>
                            </div>
                            <div className="container-body">


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
                    </div>

                    <div className="right-pannel">
                        <div>
                            {
                                (filter === 'tv') ? (searchState.tv.length > 0) ? searchState.tv.map((media, index) => horizontalMovieCard(media, onMovieCardClick))
                                    : <p>There are tv shows that matched your query.</p>
                                    : (searchState.movies.length > 0) ? searchState.movies.map((media, index) => horizontalMovieCard(media, onMovieCardClick))
                                        : <p>There are no movies that matched your query.</p>
                            }
                        </div>
                    </div>
                </div>
            }
            </div>
            </div>

    )
}

function horizontalMovieCard(media, onMovieCardClick) {
    return (
        <div className="media-details-verical-container" id={media.id} onClick={onMovieCardClick}>
            <div className="media-poster">
                <img
                    className="poster"
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face/${media.poster_path}`}
                    alt="" />
            </div>
            <div className="media-details">
                <div className="media-header">
                    <h6>{media.title}</h6>
                    <p className="date"> {dateFormat(media.release_date, "mmmm d, yyyy")}</p>
                </div>
                <div className="desc">
                    <p>{media.overview}</p>
                </div>
            </div>
        </div>
    )
}


export default Search;