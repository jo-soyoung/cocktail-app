import React from 'react';
import styles from './search_item.module.css';

const SearchItem = ({ cocktail }) => {
  return (
    <li className={styles.cocktailItem} aria-label="See details">
      <img
        src={cocktail.strDrinkThumb}
        alt="cocktail thumbnail"
        className={styles.cocktailImg}
      />
      <h5 className={styles.cocktailName}>{cocktail.strDrink}</h5>
    </li>
  );
};

export default SearchItem;
