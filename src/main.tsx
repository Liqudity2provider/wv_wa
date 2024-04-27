import React from 'react';
import { createRoot } from 'react-dom/client'; // New import for React 18
import App from './App';
import './index.css';
import './App.css'

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
