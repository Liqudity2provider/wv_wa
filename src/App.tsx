import React from 'react';
import './App.css';
import ClickableComponent from './ClickableComponent';

const App = () => {
  return (
    <div className="main-container" onClick={() => {}}>
      <ClickableComponent />
    </div>
  );
};

export default App;
