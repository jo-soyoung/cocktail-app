import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './search_item.module.css';

const SearchItem = ({ cocktail }) => {
  const history = useHistory();

  const goToDetail = () => {
    history.push('/details');
  };

  return (
    <li
      className={styles.cocktailItem}
      aria-label="See details"
      onClick={goToDetail}
    >
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
