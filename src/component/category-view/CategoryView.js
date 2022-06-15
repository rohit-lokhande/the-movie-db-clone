import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "../movie_card/MovieCard";
import MovieCardShimmer from "../movie_card/MovieCardShimmer";
import ToggleButton from "../toggle_button";
import './style.css';

function CategoryView(props) {
    const [filter, setFilter] = useState(props.selectedFilter);
    const [shimmer, setShimmer] = useState([<MovieCardShimmer />]);
    const onChange = (filter) => {
        console.log(filter);
        props.onFilterChange(filter);
    }
    useEffect(() => {
        var rows = [];
        for (var i = 0; i < 10; i++) {
            rows.push(<MovieCardShimmer />);
        }
        setShimmer(rows);

        const selectedFilter = props.filter.find((filter) => filter.default);
        setFilter(selectedFilter);
        console.log(selectedFilter);
    }, []);

    return (
        <div>
            <Row >
                <Col className="header">
                    <h2>{props.title}</h2>
                    <ToggleButton
                        selected={filter}
                        filter={props.filter}
                        onChange={onChange} />
                </Col>
                {
                    (props.state.isFetch) ? <Container className="scroll-view-container scroller_wrap should_fade is_fading">
                        <Col className="scroll-view ">
                            {
                                props.state.data.map((number, index) =>
                                    <MovieCard key={number.id} item={number} data={number} onClick={props.onCardClick} />
                                )
                            }
                        </Col>
                    </Container> : <Container>
                        <Col className="scroll-view">
                            {shimmer}
                        </Col>
                    </Container>
                }
            </Row>
        </div>
    )
}

export default CategoryView;