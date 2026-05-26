// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Inicializa o tracing para a aplicação React
console.log("Aplicação React inicializada com tracing.");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);