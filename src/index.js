// Core
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Components
import { App } from 'components/App';

// Styles
import './index.css';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/ukad-trainee-front">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
