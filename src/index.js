import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import I18nLoader from './i18nLoader'; 
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nLoader>
        <App />
      </I18nLoader>
    </BrowserRouter>
  </React.StrictMode>
);
