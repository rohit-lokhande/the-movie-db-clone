import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormControl, InputGroup } from "react-bootstrap";
import './style.css';
import dateFormat from "dateformat";
import randomColor from "randomcolor";
import { useSelector, useDispatch } from "react-redux";
import { addDicussions, fetchDicussions } from "../../redux/action/dicussion-action";
import DicussionCard from "./DicussionCard";
import { Button, Col, Container, Row } from "react-bootstrap";

const rows = [
    {
        "id": 1,
        "question": {
            'title': 'sdsdsdsd',
            'poster': 'path',
            'movie': 'movie name',
            'timestamp': 'Thu, 16 Jun 2022 08:24:30 GMT',
            "username": "adsadsd"
        },
        "reply": [
            {
                'title': 'sdsdsdsd',
                'timestamp': 'Thu, 16 Jun 2022 08:24:30 GMT',
                'username': 'sdsdf'
            }
        ]
    }
];

function Dicussion(props) {
    const [comment,setComment] = useState();

    const [filter, setFilter] = useState('movie');

    const authState = useSelector((state) => state.auth);
    const dicussionState = useSelector((state) => state.dicussion);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDicussions());
    })

    const onMovieSelect = () => {
        setFilter('movie');
    }
    const onvTSelect = () => {
        setFilter('tv');
    }


    return (

<Container>
{

<div className="split-container">
<div className="left-pannel">
<div className="container-with-header">
                           <div className="header">
                            <h3>Discussion</h3>
                        </div>
                        <div className="container-body">


                             <div className={`left-pannel-menu ${filter === 'movie' ? 'pannel-selected' : ''}`} onClick={onMovieSelect}>
                                <h6>Movies</h6>
                                <span className="search-counter">
                                    {dicussionState.movie.length}

                                </span>
                            </div>

                            <div className={`left-pannel-menu ${filter === 'tv' ? 'pannel-selected' : ''}`} onClick={onvTSelect}>
                                <h6>TV Shows</h6>
                                <span className="search-counter">
                                    {dicussionState.tv.length}

                                </span>
                            </div> 
                        </div>
                    </div>
                       </div>

                   

                    <div className="right-pannel">

                    {
                            (filter === 'tv') ? (dicussionState.tv.length > 0) ? dicussionState.tv.map((number, index) =>
                            <DicussionCard
                            number={number}
                            ></DicussionCard>                            ): <p>There are no movies that matched your query.

                            </p> : dicussionState.movie.map((number, index) =>
                               <DicussionCard
                               number={number}
                               ></DicussionCard>
                            )
                        }



         
        </div>

                </div>
            }

        </Container>

    )
}





export default Dicussion;