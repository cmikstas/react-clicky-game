import React from "react";
import "./style.css";

const DemonCard = (props) => 
{
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} onClick={() => props.handleIncrement(props.id)}/>
        </div>
      </div>
    );
}

export default DemonCard;