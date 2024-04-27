import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';


const rotateAcrossScreen = keyframes`
  from {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
  to {
    transform: translateX(100vw) rotate(360deg); // Move right across the screen and rotate
    opacity: 1;
  }
`;


const StyledCoin = styled.div<{ opacity: number; transform: string; } & React.HTMLAttributes<HTMLDivElement>>`
  width: 200px;
  height: 200px;
  background-image: url('https://cdn.midjourney.com/6226a15d-3658-4631-9b6e-611d43848315/0_0.webp');  // Ensure the URL is correct
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.3s ease, transform 0.3s ease;  // Add transform to the transition
  opacity: ${props => props.opacity};
  transform: ${props => props.transform};
`;

const Coin: React.FC = () => {
    const [clicked, setClicked] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [transformStyle, setTransformStyle] = useState('rotateX(0deg)');

    const handleClick = () => {
      if (!clicked) {
        setClicked(true);
        setOpacity(0.3);  // Reduce opacity to mimic touch
        setTransformStyle('rotateX(-30deg)');  // Tilt the coin to simulate pressing

        setTimeout(() => {
          setOpacity(1);  // Restore full opacity
          setTransformStyle('rotateX(0deg)');  // Reset the transform
          setClicked(false);
        }, 140);  // Short duration to match quick tap effect
      }
    };

    return (
      <StyledCoin 
        opacity={opacity} 
        transform={transformStyle} 
        onClick={handleClick}
      />
    );
};

export default Coin;
