import React, { useState } from 'react';
import styled from 'styled-components';

// Include standard image attributes with the custom rotation prop
const RotatingImage = styled.img.attrs<{ rotation: number }>(props => ({
  style: {
    transform: `translate(-50%, -50%) rotate(${props.rotation}deg)`,
  },
}))<{ rotation: number } & React.ImgHTMLAttributes<HTMLImageElement>>`
  width: 200px;
  height: auto;
  display: block;
  margin: 0 auto;
  transition: transform 0.5s ease-in-out;
  transform-origin: center;
  position: absolute;
  top: 35%;
  left: 43%;
`;

const ClickableComponent = () => {
  const [rotation, setRotation] = useState(0);

  const handleImageClick = () => {
    setRotation(prevRotation => prevRotation + 180); // Or the degree of rotation you prefer
  };

  return (
    <RotatingImage
      src="https://test-images-123hrechenko.s3.eu-central-1.amazonaws.com/oil-arm.png" // Replace with the actual image source
      alt="Rotating element"
      rotation={rotation}
      onClick={handleImageClick}
    />
  );
};

export default ClickableComponent;
