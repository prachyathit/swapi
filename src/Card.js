import React from 'react';

const Card = (props) => {
  if (props) {
    return (
      <div className="bg-light-green dib br3 pa3 ma2 dim bw2 shadow-5">
        <img alt="" src={props.image? props.image : "https://cdn.pixabay.com/photo/2015/12/08/15/15/robot-1083158_960_720.jpg"} width="200" height="200"></img>
        <h1>{props.name}</h1>
      </div>
    );
  }
}

export default Card