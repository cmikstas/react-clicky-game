import React from "react";
import "./style.css";

const StatusBar = (props) => 
{
    return (
      <div>
            <h1>The Game of Clicks</h1>
            <h2>Test your hand at Demonology</h2>
            <h2>Click on a demon's image to earn points, but don't click on the same demon twice!</h2>
            <br></br>
            <h3>Current Score: {props.count}</h3>
            <h2>High Score: {props.highCount}</h2>
            <br></br>
            <h1>{props.gameMessage}</h1>

      </div>
    );
}

export default StatusBar;