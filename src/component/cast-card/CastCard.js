import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import dateFormat from 'dateformat';
import ReatingView from "../rating-view/RatingView";
import logoPlaceholder from '../../assets/images/poster_placeholder.webp'

function CastCard(props) {



   const onClick= () => {
    props.onClick(props.data);
   }


  return (
    <div className="cast-card" onClick={onClick} >
              <span class="overlay">

      <img
        className="cast-img"
        src={`${ (props.data.profile_path != null) ? `https://image.tmdb.org/t/p/w220_and_h330_face/${props.data.profile_path}` : logoPlaceholder }`}
        alt="" />
        </span>


      <div
        className="media-content">
        <p className="title">{props.data.name}</p>
        <p className="date">{props.data.character}</p>

      </div>
    </div>
  )
}

export default CastCard;