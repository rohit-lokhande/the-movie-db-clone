import React, { useEffect } from "react";
import MovieDetailsCard from "../../component/movie-details-card/MovieDetailsCard";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMediaDetails } from "../../redux/action/details-action";

function MovieDetails(params) {

    let { id } = useParams();

    const detailsState = useSelector((state) => state.details);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMediaDetails(id));
    }, []);



    console.log(id);

    return (

        <div>
            {
                (detailsState.isFetch) ? 
                <MovieDetailsCard data={detailsState.data}></MovieDetailsCard> : <div></div>
            }
        </div>
    )
}

export default MovieDetails;