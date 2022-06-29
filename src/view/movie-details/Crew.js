import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './style.css'
import logoPlaceholder from '../../assets/images/poster_placeholder.webp'
import { Row } from "react-bootstrap";
import { FaStar, FaArrowLeft } from 'react-icons/fa';
import randomColor from "randomcolor";
import { useParams, useNavigate } from "react-router-dom";

function Crew(params) {

    const detailsState = useSelector((state) => state.details);
    const navigate = useNavigate();

    return (


        <div className="crew-page">


            <div className="movie-banner" style={{
                backgroundImage: `linear-gradient(
                                        to right,
                                        ${randomColor()} 150px,
                                        ${randomColor({
                    format: 'rgba',
                    alpha: 0.5
                })} 100%), 
                                        url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detailsState.data.backdrop_path})`
            }} >

                <div className="content" style={{
                    display: 'flex',
                }}>

                    <img
                        style={{
                            height: '100%',
                            width: '75px',
                            borderRadius: '8px'
                        }}
                        src={`${(detailsState.data.poster_path != null) ? `https://image.tmdb.org/t/p/w220_and_h330_face/${detailsState.data.poster_path}` : logoPlaceholder}`}
                        alt="" />
                    <div className="title-view">
                        <h2 style={{
                            fontWidth: '700'
                        }}>{detailsState.data.title}</h2>
                        <button className="play-trailer" onClick={() => {
                            navigate(-1);
                        }} >
                            <FaArrowLeft className="play-button" />
                            <h6>Back to main</h6>
                        </button>
                        {/* <a>{detailsState.details.character}</a> */}
                    </div>
                </div>



            </div>

            <div className="content">




                <div className="content-wrapper">
                    <div className="crew-container">
                        <div className="crew-pannel">
                            <h4>Cast</h4>
                            {
                                detailsState.cast.map((profile, index) =>
                                    <CrewInfo
                                        profile_path={profile.profile_path}
                                        name={profile.name}
                                        job={profile.job} />)


                            }
                        </div>

                        <div className="crew-pannel">
                            <h4>Crew</h4>
                            <div>
                                <h6>Writing</h6>
                                {
                                    detailsState.crew.filter((data) => data.department === 'Writing').map((profile, index) =>
                                        <CrewInfo
                                            profile_path={profile.profile_path}
                                            name={profile.name}
                                            job={profile.job} />)
                                }
                            </div>

                            <div>
                                <h6>Sound</h6>
                                {
                                    detailsState.crew.filter((data) => data.department === 'Sound').map((profile, index) =>
                                        <CrewInfo
                                            profile_path={profile.profile_path}
                                            name={profile.name}
                                            job={profile.job} />)
                                }
                            </div>

                            <div>
                                <h6>Production</h6>
                                {
                                    detailsState.crew.filter((data) => data.department === 'Production').map((profile, index) =>
                                        <CrewInfo
                                            profile_path={profile.profile_path}
                                            name={profile.name}
                                            job={profile.job} />)
                                }
                            </div>

                            <div>
                                <h6>Camera</h6>
                                {
                                    detailsState.crew.filter((data) => data.department === 'Camera').map((profile, index) =>
                                        <CrewInfo
                                            profile_path={profile.profile_path}
                                            name={profile.name}
                                            job={profile.job} />)
                                }
                            </div>

                            <div>
                                <h6>Directing</h6>
                                {
                                    detailsState.crew.filter((data) => data.department === 'Directing').map((profile, index) =>
                                        <CrewInfo
                                            profile_path={profile.profile_path}
                                            name={profile.name}
                                            job={profile.job} />)
                                }
                            </div>

                            <div>
                                <h6>Editing</h6>
                                {
                                    detailsState.crew.filter((data) => data.department === 'Editing').map((profile, index) =>
                                        <CrewInfo
                                            profile_path={profile.profile_path}
                                            name={profile.name}
                                            job={profile.job} />)
                                }
                            </div>

                            <div>
                                <h6>Art</h6>
                                {
                                    detailsState.crew.filter((data) => data.department === 'Art ').map((profile, index) =>
                                        <CrewInfo
                                            profile_path={profile.profile_path}
                                            name={profile.name}
                                            job={profile.job} />)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

function CrewInfo(props) {
    return (
        <div className="crew-info">
            <img
                className="crew-pic"
                src={`${(props.profile_path != null) ? `https://image.tmdb.org/t/p/w220_and_h330_face/${props.profile_path}` : logoPlaceholder}`}
                alt="" />
            <div className="crew-details-view">
                <h6>{props.name}</h6>
                <a>{props.job}</a>
            </div>
        </div>
    )
}

export default Crew;