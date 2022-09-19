import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './style/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename='/ddr20'>
    <App />
  </Router>
);