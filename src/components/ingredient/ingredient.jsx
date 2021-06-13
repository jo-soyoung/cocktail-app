import React from 'react';
import styles from './ingredient.module.css';

const Ingredient = ({ ingredient }) => {
  return (
    <li className={styles.item}>
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}.png`}
        alt={ingredient}
      />
      <p>{ingredient}</p>
    </li>
  );
};

export default Ingredient;
