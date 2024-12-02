import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // This should be here
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>  {/* This wraps the entire app */}
    <App />
  </Router>
);
