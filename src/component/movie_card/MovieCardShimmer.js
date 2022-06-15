import React from "react";
import { ShimmerSectionHeader, ShimmerThumbnail } from "react-shimmer-effects";

function MovieCardShimmer(props) {
    return(
        <div className="card-container" onClick={props.onClick  } >
       <ShimmerThumbnail
        className='shimmer-image' width={150} rounded></ShimmerThumbnail>
    </div>   
    )
}

export default MovieCardShimmer;