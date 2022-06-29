import React, { useEffect, useState } from "react";
import MovieDetailsCard from "../../component/movie-details-card/MovieDetailsCard";
import { useParams,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCast, fetchMediaDetails, fetchTrailers } from "../../redux/action/details-action";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import CastCard from "../../component/cast-card/CastCard";

function MovieDetails(params) {
    let navigate = useNavigate();

    let { type, id } = useParams();

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const detailsState = useSelector((state) => state.details);

    const handleClose = () => setShow(false);

    const dispatch = useDispatch();
    useEffect(() => {

        console.log('Open Movie Details with =>', type, id);
        dispatch(fetchMediaDetails(type, id));
        dispatch(fetchTrailers(type, id));
        dispatch(fetchCast(type, id));

    }, []);


    return (

        <div>
            {
                (detailsState.isFetch) ?
                    <div>

                        <MovieDetailsCard data={detailsState.data} onPlayTrailer={() => {
                            handleShow();
                        }}></MovieDetailsCard>

                        {
                            (detailsState.cast.length > 1) ?



                                <div className="content">
                                    <div className="content-wrapper">

                                        <div className="split-container">

                                            <div className="right-pannel">
                                                <div className="cast-view-pannel" >
                                                    <div className="header" style={{
                                                        marginBottom: '12px'
                                                    }}>
                                                        <h2>Top Billed Cast</h2>

                                                    </div>
                                                    {
                                                        <div className="scroll-view-container scroller_wrap should_fade is_fading">
                                                            <Col className="scroll-view ">
                                                                {
                                                                    detailsState.cast.slice(0, 9).map((number, index) =>
                                                                        //    <h1>{number.name}</h1>
                                                                        <CastCard data={number}></CastCard>
                                                                    )

                                                                }


                                                                <div className="cast-card" onClick={()=>{
                                                                            navigate(`/cast`);

                                                                }} >




                                                                    <div
                                                                        className="view-all">
                                                                        <p className="title">View All</p>

                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="left-pannel">

                                            </div>
                                        </div>










                                    </div>





                                </div> : <div></div>

                        }





                    </div> : <div></div>


            }

            {
                (detailsState.isFetch && detailsState.trailer.length > 1 ) ? <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{detailsState.trailer[0].name}</Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <iframe className="youtube-player"
                                src={`https://www.youtube.com/embed/${detailsState.trailer[0].key}`}
                                frameborder="0"
                                allow="autoplay; encrypted-media"
                                allowfullscreen
                                title={detailsState.trailer[0].name}
                            />{" "}
                        </div>
                    </Modal.Body>

                </Modal> : <div></div>
            }


        </div>
    )
}

export default MovieDetails;