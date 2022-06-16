import React, { useEffect } from "react";
import MovieDetailsCard from "../../component/movie-details-card/MovieDetailsCard";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMediaDetails } from "../../redux/action/details-action";

function MovieDetails(params) {

    let { type,id } = useParams();

    const detailsState = useSelector((state) => state.details);


    const dispatch = useDispatch();
    useEffect(() => {

        console.log('Open Movie Details with =>',type , id);
        dispatch(fetchMediaDetails(type,id));
    }, []);


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