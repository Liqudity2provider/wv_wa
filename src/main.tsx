import React from 'react';
import { createRoot } from 'react-dom/client'; // New import for React 18
import Clicker from './App';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Clicker />
  </React.StrictMode>
);
