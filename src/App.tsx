import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Button = styled.button`
  padding: 20px 40px;
  font-size: 24px;
  color: #fff;
  background-color: #0077ff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004488;
  }
`;

const Clicker = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Button onClick={() => setCount(count + 1)}>
        Click me! Count: {count}
      </Button>
    </Container>
  );
};

export default Clicker;
