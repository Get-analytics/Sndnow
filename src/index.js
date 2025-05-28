// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { PostHogProvider } from 'posthog-js/react';

const options = {
  api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
  autocapture: true,
  capture_pageview: 'history_change', // Correct usage
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PostHogProvider 
    apiKey={process.env.REACT_APP_PUBLIC_POSTHOG_KEY}
    options={options}
  >
    <App />
  </PostHogProvider>
);
