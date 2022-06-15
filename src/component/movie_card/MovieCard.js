import React from "react";
import './moviecard.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import dateFormat from 'dateformat';
import ReatingView from "../rating-view/RatingView";

function MovieCard(props) {



   const onClick= () => {
    props.onClick(props.data.id);
   }


  return (
    <div className="card-container" onClick={onClick} >
      <img
        className="image"
        src={`https://image.tmdb.org/t/p/w220_and_h330_face/${props.data.poster_path}`}
        alt="" />

      <div className="progressbar-container2">
        <ReatingView
         value={(props.data.vote_average) * 10}
         text={(props.data.vote_average * 10)}
        />
      </div>

      <div
        className="content">
        <p className="title">{props.data.title != null ? props.data.title : props.data.name}</p>
        <p className="date"> {dateFormat(props.data.release_date, "mmm d, yyyy")}</p>
      </div>
    </div>
  )
}

export default MovieCard;