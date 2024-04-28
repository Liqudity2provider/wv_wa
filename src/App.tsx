import React, { useState } from 'react';
import './App.css';
import MovableComponent from './MovableComponent';

const App = () => {
  const [rotation, setRotation] = useState(0); // Initial rotation of the element
  const [lastRotation, setLastRotation] = useState("UP"); // Initial direction

  const handleScreenClick = () => {
    if (lastRotation === "UP") {
      setRotation(prevRotation => prevRotation + 60);
      setLastRotation("DOWN");
    } else {
      setRotation(prevRotation => prevRotation - 60);
      setLastRotation("UP");
    }
  };

  return (
    <div className="main-container" style={{ width: '100vw', height: '100vh' }} onClick={handleScreenClick}>
      <div className='movable-image'> <MovableComponent rotation={rotation} /> </div>
    </div>
  );
};

export default App;
