import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

interface ButtonProps {
  onClick: () => void; // This defines the onClick event handler type
}

// Use the ButtonProps interface for typing props in styled component
const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;


const CountDisplay = styled.div`
  margin-top: 20px;
  font-size: 24px;
`;


const Clicker: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Button onClick={() => setCount(count + 1)}>
        Click me!
      </Button>
      <CountDisplay>Count: {count}</CountDisplay>
    </Container>
  );
}

export default Clicker;
