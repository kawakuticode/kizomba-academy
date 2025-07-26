// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './services/i18n/i18n'; // Make sure this path is correct
import reportWebVitals from './reportWebVitals';
// Import necessary components from react-router-dom for data routers
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Import your page components
import App from './pages/App'; // Make sure this path is correct
import Dashboard from './pages/Dashboard'; // Import the Dashboard component
import SubscribePage from './pages/SubscribePage'; // Import the SubscribePage component
import LoginPage from './pages/LoginPage'; // Import the LoginPage component
import NotFoundPage from './pages/NotFoundPage';

// Configure routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: < NotFoundPage />, // Basic error element
    // If App has nested routes, you might need 'children' here
  },
  {
    path: "/login", // Define the path for LoginPage
    element: <LoginPage />,
  },
  {
    path: "/subscribe", // Define the path for SubscribePage
    element: <SubscribePage />,
  },
  {
    path: "/dashboard", // Define the path for Dashboard
    element: <Dashboard />,
  }
  // Add more routes as needed
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // Removed <React.StrictMode> tags as requested
  <RouterProvider router={router} /> // Render the RouterProvider with your configured router
  // Removed </React.StrictMode> tag and the stray </RouterProvider>
);

// If you do not need reportWebVitals, you can remove the following line
reportWebVitals();