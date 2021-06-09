import React from 'react';
import styles from './search_item.module.css';

const SearchItem = ({ cocktail }) => {
  return (
    <li>
      <img src={cocktail.strDrinkThumb} alt="cocktail thumbnail" />
      <h5>{cocktail.strDrink}</h5>
    </li>
  );
};

export default SearchItem;
