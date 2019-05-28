import React, {useState} from "react";

const ReactColorSquare = props => {

  const [rand, updateRand] = useState(Math.random()); 
  const { width, height, color, text } = props;
  return (
    <div
      style={{
        width: width || 100,
        height: height || 100,
        backgroundColor: color || "blue"
      }}
    >
      {text} {rand}
    </div>
  );
};

export default ReactColorSquare;
