import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "../movie_card/MovieCard";
import ToggleButton from "../toggle_button/ToggleButton";
import './style.css';

function CategoryView(params) {

    const [card, setcard] = useState();

    useEffect(() => {
        var data = [];
        for (var i = 0; i < 50; i++) {
            data.push(<MovieCard index={i} />)
        }

        setcard(data);
    }, []);


    return (
        <div>

            <Row >
                <Col className="header">
                    <h2>What's Popular</h2>
                    <ToggleButton></ToggleButton>
                </Col>

                <Container>
                    <Col className="scroll-view">
                        {card}
                    </Col>
                </Container>

            </Row>



        </div>
    )
}

export default CategoryView;