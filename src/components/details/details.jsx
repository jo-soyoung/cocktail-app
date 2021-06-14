import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './details.module.css';
import Button from '../button/button';
import Ingredient from '../ingredient/ingredient';

const Details = ({ authService, cocktailRepo }) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const ingredients = historyState.ingredients;
  const taste = historyState.taste?.replace(/,/g, ' ');

  const [userId, setUserId] = useState(historyState && historyState.id);
  const [cocktails, setCocktails] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  }, [authService, history]);

  const addCocktailPick = cocktail => {
    setCocktails(cocktails => {
      const newCocktail = { ...cocktails };
      newCocktail[cocktail.id] = cocktail;
      return newCocktail;
    });
    cocktailRepo.saveCocktail(userId, cocktail);
  };

  const deleteCocktailPick = cocktail => {
    setCocktails(cocktails => {
      const newCocktail = { ...cocktails };
      delete newCocktail[cocktail.id];
      return newCocktail;
    });
    cocktailRepo.removeCocktail(userId, cocktail);
  };

  //submit to the firebase database
  const onSubmit = e => {
    e.preventDefault();
    const cocktail = { ...historyState, id: Date.now() };
    addCocktailPick(cocktail);
  };

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
          return (
            ingredient && (
              <Ingredient ingredient={ingredient} key={Math.random()} />
            )
          );
        })}
      </ul>
    </main>
  );
};

export default Details;
