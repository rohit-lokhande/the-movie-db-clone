import { Grid } from "@mui/material";
import React from "react";
import { Button, Col, OverlayTrigger, Row, Tooltip, Container } from "react-bootstrap";
import './style.css'
import { IoIosListBox } from 'react-icons/io';
import { MdFavorite } from 'react-icons/md';
import { IoPricetag } from 'react-icons/io5';
import { FaStar, FaPlay } from 'react-icons/fa';

import { CircularProgressbar } from 'react-circular-progressbar';
import randomColor from "randomcolor";
import ReatingView from "../rating-view/RatingView";
import dateFormat from 'dateformat';

function MovieDetailsCard(props) {


    const provider = props.data.providers;

    return (
        <div className="details-card-container"
            style={{
                backgroundImage: `linear-gradient(
                                        to right,
                                        ${randomColor()} 150px,
                                        ${randomColor({
                    format: 'rgba',
                    alpha: 0.5
                })} 100%), 
                                        url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${props.data.backdrop_path})`
            }}>

            <Container style={{ display: 'flex' }}>

                <div className="poster-container">
                    <img className="poster"
                        alt="Poster"
                        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${props.data.poster_path}`} />

                    {(provider != null) && <div className="watch-option-container">
                        <div style={{
                            alignItems: 'center',
                            display: 'flex',
                            textAlign: 'center',
                            justifyContent: 'center'
                        }}>

                            <div>
                                <img height={40} width={40} alt=""
                                    src={`https://www.themoviedb.org/t/p/original${getProviderPoster(provider)}`} />
                            </div>
                            <div style={{
                                textAlign: 'start',
                                paddingLeft: '8px'
                            }} >
                                <a className="provider-title">{getProviderTitle(provider)}</a>
                                <h6 style={{
                                    color: 'white',
                                    margin: '0px !important'
                                }}>Watch Now</h6>
                            </div>
                        </div>
                    </div>}
                </div>

                <div className="overview-container">
                    <HeaderView data={props.data} />
                    <ActionView data={props.data} />
                    <div style={{
                        paddingTop: '32px'
                    }}>
                        <h2>Overview</h2>
                        <p>{props.data.overview}
                        </p>
                    </div>
                    {/* <div className="crew-container">
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 3, md: 4 }} className='grid-container'>
                            <CastDetailView
                                name='Genndy Tartakovsky'
                                work='Screenplay, Story' />

                            <CastDetailView
                                name='Derek Drymon'
                                work='Director' />

                            <CastDetailView
                                name='Amos Vernon'
                                work='Screenplay' />
                        </Grid>
                    </div> */}
                </div>
            </Container>
        </div>
    )

}


const getProviderTitle = (provider) => {
    if (provider.rent != null && provider.buy != null) {
        return 'Available to Rent or Buy';
    } else if (provider.rent != null) {
        return 'Available to Rent';
    } else {
        return 'Streaming Now';
    }
}

const getProviderPoster = (provider) => {


    if (provider.rent != null) {
        return provider.rent[0].logo_path;
    } else if (provider.flatrate != null) {
        return provider.flatrate[0].logo_path;
    } else if (provider.buy != null) {
        return provider.buy[0].logo_path;
    }
    else {
        return '';
    }
}

const CastDetailView = (props) => {
    return (
        <Grid item xs={3}>
            <h6>{props.name}</h6>
            <span>{props.work}</span>
        </Grid>
    )
}


const ActionButton = (props) => {
    return (
        <OverlayTrigger
            placement='bottom'
            overlay={
                <Tooltip >
                    {props.title}
                </Tooltip>}>
            <div className="action-button">
                {props.icon}
            </div>
        </OverlayTrigger>
    )
}

const ActionView = (props) => {
    return (
        <div className="actions-container">
            <ol>
                <li>
                    <div className="vote-container">
                        <div className="progressbar-container">
                            <div className="prodgress-view">
                                <ReatingView

                                    value={(props.data.vote_average) * 10}
                                    text={(Math.trunc(props.data.vote_average) * 10)}
                                />
                            </div>
                        </div>
                        <span> <h6>User <br></br> Score</h6> </span>
                    </div>
                </li>

                <li>
                    <ActionButton
                        title='Login to create and edit custom lists'
                        icon={<IoIosListBox />} />
                </li>

                <li>
                    <ActionButton
                        title='Login to add this movie to your favorite list'
                        icon={<MdFavorite />} />
                </li>

                <li>
                    <ActionButton
                        title='Login to add this movie to your watchlist'
                        icon={<IoPricetag />} />
                </li>

                <li>
                    <ActionButton
                        title='Login to rate this movie'
                        icon={<FaStar />} />
                </li>

                <li>
                    <div className="play-trailer">
                        <FaPlay className="play-button" />
                        <h6>Play Trailer</h6>
                    </div>
                </li>
            </ol>
        </div>
    )
}


const HeaderView = (props) => {
    return (
        <div className="header-container">
            <div className="header">
                <h1>{props.data.title != null ? props.data.title : props.data.name}</h1>
                <h1 className="movie-year"> ({dateFormat(props.data.release_date, "yyyy")})</h1>
            </div>

            <div className="header-details">
                <ol>
                    <li>
                        <div className="movie-grade">PG-13</div>
                    </li>

                    {
                        (props.data.release_date != null) && <li>
                            <a>{props.data.release_date} ({props.data.production_companies[0].origin_country})</a>
                        </li>
                    }


                    <li>
                        <a> &#8226; {getGenres(props.data.genres)}
                        </a>
                    </li>

                    {
                        (props.data.runtime != null) && <li>
                            <a> &#8226; {calcuateRunTime(props.data.runtime)}
                            </a>
                        </li>
                    }

                </ol>
            </div>
        </div>
    )
}

function getGenres(genres) {
    return genres.map((gen) => gen.name).join(' , ');
}


function calcuateRunTime(runtime) {
    var minutes = runtime % 60;
    var hours = (runtime - minutes) / 60;
    return `${hours}h ${minutes}m`;
}

export default MovieDetailsCard;