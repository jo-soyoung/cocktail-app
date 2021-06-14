import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service.js';
import CocktailRepo from './service/cocktail_repo.js';
import Cocktail from './service/cocktail_server';

const authService = new AuthService();
const cocktailRepo = new CocktailRepo();
const cocktail = new Cocktail();

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      cocktailRepo={cocktailRepo}
      cocktail={cocktail}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
