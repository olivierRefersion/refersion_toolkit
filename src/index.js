import React from 'react';
<<<<<<< HEAD
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
=======
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
        <App />
  </BrowserRouter>,
     document.getElementById('root')
);
>>>>>>> 5191e22be458b949df3a8bf229964a48b829baaa

reportWebVitals();

{/* <React.StrictMode>
    <BrowserRouter
      <App />
    </BrowserRouter>  
  </React.StrictMode>, */}
