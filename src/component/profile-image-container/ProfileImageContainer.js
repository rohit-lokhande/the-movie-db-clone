import randomColor from "randomcolor";
import React from "react";

const style = {
    backgroundColor: `${randomColor()}`,
    borderRadius: '40px',
    padding: '8px',
    alignItems: 'center',
    textAlign: 'center',
    width: '40px',
    height: '40px',
    marginRight: '12px',
    fontWeight: 600,
    color: 'white'
};

function ProfileImageContainer(props) {
    return (
        <div style={style} >
            {props.username[0]}
        </div>
    )
}

export default ProfileImageContainer;