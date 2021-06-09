import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service.js';
import Cocktail from './service/cocktail_server';

const authService = new AuthService();
const cocktail = new Cocktail();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} cocktail={cocktail} />
  </React.StrictMode>,
  document.getElementById('root')
);
