import React from "react";
import './leatherboard.css'

function ProgrssBar(props) {
    const { bgcolor, completed } = props;

  const containerStyles = {
    height: 6,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 5,

  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold'
  }

  return (
    <div className="wrapper" style={{ width: `${completed}%` }}>
    <div className="barContainer" >
      <div className="filler" style={{ width: `${100}%`,
     background: `linear-gradient(to right, ${props.primaryColor} 0%, ${props.secondaryColor} 100%)`
    
    }} />
    </div>
    <div className="textValue">
      
    {props.total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
      </div>
  </div>
  )
}

export default ProgrssBar;