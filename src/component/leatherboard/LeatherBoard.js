import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import './style.css';
import ProgrssBar from "./ProgrssBar";
import { fetchLeatherBoard } from "../../redux/action/home-action";

function LeatherBoard() {

  const leatherboardState = useSelector((state) => state.home.leatherboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeatherBoard());
  }, []);

  return (
    <div>
      {
        (leatherboardState.isFetch) ? <Row className="leatherboard">

          <Col className="header">
            <h2>Leaderboard</h2>
            <Row style={{
              marginLeft: '4px'
            }}>
              <Col>
                <CustomBullet
                  primaryColor='#C0FECF'
                  secondaryColor='#1ED5A9'
                  title='All Time Edits' />

                <CustomBullet
                  primaryColor='#FDC170'
                  secondaryColor='#D93B63'
                  title='Edits This Week' />
              </Col>
            </Row>
          </Col>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='grid-container'>
            {leatherboardState.data.map((data, index) =>
              <Grid item xs={6} style={{
                display: 'flex', marginTop: '10px'
              }}>
                <span className="avatar">
                  <img className="avatar"
                    src={data.profile_url}
                    alt="" />
                </span>

                <div className="data">
                  <a className="participate-name">{data.user_name}</a>

                  <ProgrssBar primaryColor='#C0FECF' secondaryColor='#1ED5A9' completed={data.all_hits.progress} total={data.all_hits.value} />

                  <ProgrssBar primaryColor='#FDC170' secondaryColor='#D93B63' completed={data.week_hits.progress} total={data.week_hits.value} />

                </div>
              </Grid>
            )}

          </Grid>
        </Row> : <Container />
      }
    </div>
  )
}

const CustomBullet = (props) => {
  return (
    <Col className="custom-bullet-container">
      <div className="custom-bullet"
        style={{
          backgroundImage: `linear-gradient(to right, ${props.primaryColor} 0%, ${props.secondaryColor} 100%)`
        }} />
      <span className="custom-bullet-text">{props.title}</span>
    </Col>
  )
}



export default LeatherBoard;