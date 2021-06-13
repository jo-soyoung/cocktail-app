import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './search_item.module.css';

const SearchItem = ({ cocktail }) => {
  const history = useHistory();

  const goToDetail = () => {
    history.push({
      pathname: '/details',
      state: {
        name: cocktail.strDrink,
        taste: cocktail.strTags,
        image: cocktail.strDrinkThumb,
        ingredients: [
          cocktail.strIngredient1,
          cocktail.strIngredient2,
          cocktail.strIngredient3,
          cocktail.strIngredient4,
          cocktail.strIngredient5,
          cocktail.strIngredient6,
          cocktail.strIngredient7,
          cocktail.strIngredient8,
          cocktail.strIngredient9,
        ],
      },
    });
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
