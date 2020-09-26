import React, { useRef, useState } from 'react';
import './Background.css'

const Background = () => {

  const canvasRef = useRef(null);
  const [state, setState] = useState({});  
  
  return (
    <div className="AppBackground">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Background;