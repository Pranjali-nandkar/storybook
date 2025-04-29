import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';  // Import the global CSS file for your color tokens
import App from '.src/App';  // Import your main App component
import { BrowserRouter as Router } from 'react-router-dom'; // If you're using React Router for navigation

// Initialize the root ReactDOM container
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Render the App component inside a Router (optional, depending on your project setup)
root.render(
  <Router>
    <App />
  </Router>
);
