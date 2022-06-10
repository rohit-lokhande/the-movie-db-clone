import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import './togglebutton.css'

function ToggleButton() {

    const [selectedIndex, setSelectedIndex] = useState('Streaming');

    const [values, setValues] = useState();

    const onClick = (e, key) => {
        console.log(key);
        setSelectedIndex(key);
        const data = ["Streaming", "On TV", "For Rent", "In Theaters"];

        const vales = data.map((data) => {
            if (data === key) {
                return (<div className="toggle-btn selected" key={data} onClick={event => onClick(event, data)} ><a>{data}</a></div>);
            } else {
                return (<div className="toggle-btn" key={data} onClick={event => onClick(event, data)} >{data}</div>);

            }


        });
        setValues(vales);

    }

    useEffect(() => {
        const data = ["Streaming", "On TV", "For Rent", "In Theaters"];

        const vales = data.map((data) => {
            if (data === selectedIndex) {
                return (<div className="toggle-btn selected" key={data} onClick={event => onClick(event, data)} >{data}</div>);
            } else {
                return (<div className="toggle-btn" key={data} onClick={event => onClick(event, data)} >{data}</div>);

            }


        });
        setValues(vales);


    }, []);



    return (
        <div style={{
            margin: '30px'
        }}>
            <Col className="main-container">
                {values}
                {/* <div className="toggle-btn">1</div>
            <div className="toggle-btn selected">2</div>
            <div className="toggle-btn">3</div> */}

            </Col>
        </div>
    )
}

export default ToggleButton;