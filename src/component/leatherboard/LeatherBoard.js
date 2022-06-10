import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import './leatherboard.css';
import ProgrssBar from "./ProgrssBar";

function LeatherBoard() {

  const [data, setData] = useState();

  const progressData = [
    {
      primaryColor: '#C0FECF',
      secondaryColor: '#1ED5A9',
      completed: 60,
      total: 22312
    },
    {
      primaryColor: '#FDC170',
      secondaryColor: '#D93B63',
      completed: 30,
      total: 1254
    }
  ];


  useEffect(() => {
    var data = [];
    for (var i = 0; i < 4; i++) {
      data.push(
        <Grid item xs={6} style={{
          display: 'flex', marginTop: '10px'
        }}>
          <span className="avatar">
            <img className="avatar"
              src="https://www.themoviedb.org/t/p/w64_and_h64_face/r1KY1E9EPR2YZWqovmslYMLBzjR.jpg"
              alt="" />
          </span>

          <div class="data">
            <a className="participate-name">fallinggucci</a>
            {progressData.map((item, idx) => (
              <ProgrssBar key={idx} primaryColor={item.primaryColor} secondaryColor={item.secondaryColor} completed={item.completed} total={item.total} />
            ))}
          </div>
        </Grid>
      )
    }
    setData(data);
  }, []);

  return (
    <Row className="leatherboard">
      <Col className="header">
        <h5>Leaderboard</h5>
        <Row style={{
          marginLeft: '4px'
        }}>
          <Col>
            <CustomBullet
              primaryColor='#C0FECF'
              secondaryColor='#1ED5A9'
              title='All Time Edits'
            />

            <CustomBullet
              primaryColor='#FDC170'
              secondaryColor='#D93B63'
              title='Edits This Week'
            />
          </Col>
        </Row>
      </Col>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='grid-container'>
        {data}
      </Grid>
    </Row>
  )
}

const CustomBullet = (props) => {

  return (
    <Col className="custom-bullet-container">
      <div className="custom-bullet"
        style={{
          backgroundImage: `linear-gradient(to right, ${props.primaryColor} 0%, ${props.secondaryColor} 100%)`
        }}></div>
      <span className="custom-bullet-text">{props.title}

      </span>

    </Col>

  )
}



export default LeatherBoard;