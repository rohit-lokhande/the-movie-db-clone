import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import './style.css'

function ToggleButton(props) {

    const [selectedIndex, setSelectedIndex] = useState('Streaming');

    const [values, setValues] = useState();

    const onClick = (e, key) => {
        setValues(createViews(key));
        props.onChange(key);
    }

    useEffect(() => {
        setValues(createViews(props.selected));
    }, []);

    return (
        <Col className="main-container">
            {values}
        </Col>
    )

    function createViews(key) {
        return props.filter.map((data) => {
            if (data.id === key.id) {
                return (<div className="toggle-btn selected" key={data.id} onClick={event => onClick(event, data)} ><a>{data.name}</a></div>);
            } else {
                return (<div className="toggle-btn" key={data.id} onClick={event => onClick(event, data)} ><a>{data.name}</a></div>);
            }
        });
    }

}


export default ToggleButton;