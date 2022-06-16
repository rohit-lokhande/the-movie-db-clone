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

    const authState = useSelector((state) => state.auth);
    const dicussionState = useSelector((state) => state.dicussion);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDicussions());
    })


    return (
        <div className="dicussion">
            {
               (dicussionState.isFetch ) &&  dicussionState.dicussion.map((number, index) =>
               <DicussionCard
               number={number}
               ></DicussionCard>
           )
            }
        </div>
    )
}





export default Dicussion;