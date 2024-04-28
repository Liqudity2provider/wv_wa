import React from 'react';
import styled from 'styled-components';

// Define a type for the props expected by MovableComponent
interface MovableComponentProps {
  rotation: number;  // Define the type of 'rotation' as number
}

// Apply the prop types to the styled component
const MovableElement = styled.div<MovableComponentProps>`
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%) rotate(${props => props.rotation}deg);
  transition: transform 0.3s ease-in-out;
  background-image: url('https://test-images-123hrechenko.s3.eu-central-1.amazonaws.com/oil-arm.png'); // Your image
  background-size: cover;
`;

// Use the prop types in your functional component
const MovableComponent: React.FC<MovableComponentProps> = ({ rotation }) => {
  return (
    <MovableElement rotation={rotation} />
  );
};

export default MovableComponent;
