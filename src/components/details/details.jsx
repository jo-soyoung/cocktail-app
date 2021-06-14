import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './details.module.css';
import Button from '../button/button';
import Ingredient from '../ingredient/ingredient';

const Details = () => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const ingredients = historyState.ingredients;
  const taste = historyState.taste?.replace(/,/g, ' ');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //submit to the firebase database
  const onSubmit = () => {};

  return (
    <main>
      <h1>{historyState.name}</h1>
      <p>{taste}</p>
      <div>
        <img src={historyState.image} alt={historyState.name} />
        <Button name="Pick" onClick={onSubmit} />
      </div>

      <h2>Ingredients</h2>
      <ul className={styles.ingredients}>
        {ingredients.map(ingredient => {
          if (ingredient !== null) {
            return <Ingredient ingredient={ingredient} key={Math.random()} />;
          }
        })}
      </ul>
    </main>
  );
};

export default Details;
