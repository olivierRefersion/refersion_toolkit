import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const AppContainer = document.getElementById('root');
const root = createRoot(AppContainer);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals();
