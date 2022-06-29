import React, { useEffect, useState } from "react";
import './style.css';
import { Col, Container, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMediaUsingQuery } from "../../redux/action/search-action";
// import dateFormat from 'dateformat';
import { GoSearch } from 'react-icons/go';
import { MdArrowForward } from 'react-icons/md';
import { useNavigate, useSearchParams } from "react-router-dom";

function Search(props) {

    const [query, setQuery] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchState = useSelector((state) => state.search);
    const [filter, setFilter] = useState('movie');
    let navigate = useNavigate();
    var data = searchParams.get("query");

    const dispatch = useDispatch();
    useEffect(() => {
        setQuery(data);
        dispatch(fetchMediaUsingQuery(data));
    }, [searchParams.get("query")]);

    const onSearchClick = () => {
        if (query != null && query.length > 0) {
            navigate(`/search?query=${query}`);
        }
    }

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

            <Col className="search-container">
                <Container className="nav-container">
                    <GoSearch />
                    <FormControl className="search-input" placeholder="Search Movie, TV shows" value={query} onChange={(e) => {
                        setQuery(e.target.value);
                    }}></FormControl>
                    <MdArrowForward onClick={onSearchClick} />
                </Container>
            </Col>

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
                    <h6>{(media.media_type === 'movie') ? media.title : media.name}</h6>
                    {/* <p className="date"> {dateFormat(media.release_date, "mmmm d, yyyy")}</p> */}
                </div>
                <div className="desc">
                    <p>{media.overview}</p>
                </div>
            </div>
        </div>
    )
}


export default Search;