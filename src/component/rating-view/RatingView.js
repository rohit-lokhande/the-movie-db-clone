import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';

function ReatingView(props) {
    const stroke = (props) => {
        if (props.value > 70) {
            return {
                path: '#20cc77',
                trail: '#1e4228'
            }
        }
        else if (props.value >= 40) {
            return {
                path: '#d2d531',
                trail: '#423d0f'
            }
        }
        else if (props.value === 0) {
            return {
                path: '#666666',
                trail: '#666666'
            }
        }
        else {
            return {
                path: '#db2360',
                trail: '#571435'
            }
        }
    }
    return (
        <CircularProgressbar
            value={props.value}
            text={(props.value === 0) ? 'NR' : `${Math.floor(props.text)}%`}
            background={true}
            styles={{
                path: {
                    stroke: stroke(props).path
                },
                trail: {
                    stroke: stroke(props).trail
                },
                text: {
                    fill: '#fff',
                    fontSize: '28px',
                    fontWeight: 'bold'
                },
                background: {
                    fill: '#081c22',
                },
            }} />
    )
}

export default ReatingView;