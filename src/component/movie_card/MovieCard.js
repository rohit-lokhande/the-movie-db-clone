import React from "react";
import './moviecard.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function MovieCard(props) {
    return (
        <div className="card-container">


            <img
                className="image"
                src="https://www.themoviedb.org/t/p/w220_and_h330_face/ekZobS8isE6mA53RAiGDG93hBxL.jpg"
                alt=""
            ></img>
<div className="progressbar-container">


<CircularProgressbar
  value={props.index}
  text={`${props.index}%`}
  background={true}
  styles={{
    // Customize the root svg element
    root: {
        
    },
    // // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: '#20cc77',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    //   strokeLinecap: 'butt',
      // Customize transition animation
    //   transition: 'stroke-dashoffset 0.5s ease 0s',
      // Rotate the path
    //   transform: 'rotate(0.25turn)',
    //   transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#1e4228',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    //   strokeLinecap: 'butt',
      // Rotate the trail
    //   transform: 'rotate(0.25turn)',
    //   transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // Text color
      fill: '#fff',
      // Text size
      fontSize: '24px',
      fontWeight: 'bold'
    },
    
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#081c22',
    },
  }}
/>
















</div>
            <div
             className="content">
                 <p className="title">Lucifer</p>
                 <p className="date">Jan 25, 2016</p>
             </div>

        </div>
    )
}

export default MovieCard;