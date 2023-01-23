// Core
import React from 'react';
import ReactDOM from 'react-dom/client';

// Utils
import { BrowserRouter } from 'react-router-dom';

// Components
import { App } from 'components/App';

// Fonts
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/ukad-trainee-front">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
