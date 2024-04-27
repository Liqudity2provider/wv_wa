import React from 'react';
import Coin from './Coin'; // Make sure the path matches where your Coin component is located

const App: React.FC = () => {
  return (
    <div>
      <h1>Click the Coin!</h1>
      <Coin />
    </div>
  );
}

export default App;
