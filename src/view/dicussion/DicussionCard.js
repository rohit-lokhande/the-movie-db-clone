import randomColor from "randomcolor";
import React, { useEffect, useState } from "react";
import './style.css';
// import dateFormat from "dateformat";
import { FormControl, InputGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addDicussions, fetchDicussions } from "../../redux/action/dicussion-action";
import ProfileImageContainer from "../../component/profile-image-container/ProfileImageContainer";

function DicussionCard(props) {

    const [comment,setComment] = useState();

    const authState = useSelector((state) => state.auth);
    const dicussionState = useSelector((state) => state.dicussion);
    const dispatch = useDispatch();
    
    const onSentClick = (e,chat)=>{
if(comment != null){

    dispatch(addDicussions(chat,{
        'title': comment,
        'timestamp': 'Thu, 16 Jun 2022 08:24:30 GMT',
        'username': authState.username
    }));

    setComment('');
}

    }

    const onUpdateComment = (e) =>{
        setComment(e.target.value);
    }



    return (
        <div className="chat-container">
       {chatView(props.number.question)}
        <div className="chat-view">
            {
                (props.number.reply != null) && props.number.reply.map((reply, index) =>
                replayView(reply)
            )
            }
        </div>

        <div className="chat-bottom-pannel">
            {
                (authState.username != null) ? <div className="chat-input">
                    <InputGroup>
                        <FormControl className="search-input" value={comment} placeholder="Comments....." onChange={onUpdateComment}></FormControl>
                        <input type="button" value=">" className="btn-search" onClick={(e)=>{
                            onSentClick(e,props.number);
                        }}  />
                    </InputGroup>
                </div> :
                    <div className="chat-input-disable">
                        <InputGroup>
                            <FormControl className="search-input" value="Login to add comments " placeholder="Comments....." disabled></FormControl>
                            <input type="button" value=">" className="btn-search" />
                        </InputGroup>
                    </div>
            }
        </div> 
    </div>
    );
}

function chatView(props) {
    return (
        <div className="chat-top-pannel">
            <div className="chat-left-pannel">
            <ProfileImageContainer username={props.username}/>


                <div>
                    <p className="chat-title">{props.title}</p>
                    <div className="movie-name">
                        <img alt=""
                            height={36} width={24}
                            src={(props.poster != null) ? props.poster : 'https://www.themoviedb.org/t/p/w45_and_h67_face_filter(moderate,nudity,96)/knEIz1eNGl5MQDbrEAVWA7iRqF9.jpg'}></img>
                        <p>{props.movie}</p>
                    </div>
                </div>
            </div>
            <div className="chat-right-pannel">
                {/* <p>{dateFormat(props.timestamp, "mmm d yyyy, h:MM TT")}</p> */}
            </div>
        </div>
    )
}

function replayView(props) {
    return (
        <div className="chat-top-pannel">
            <div className="chat-left-pannel">
               <ProfileImageContainer username={props.username}/>
                <div>
                    <p className="chat-title">{props.title}</p>
                </div>
            </div>
            <div className="chat-right-pannel">
                {/* <p>{dateFormat(props.timestamp, "mmm d yyyy, h:MM TT")}</p> */}
            </div>
        </div>
    )
}

export default DicussionCard;