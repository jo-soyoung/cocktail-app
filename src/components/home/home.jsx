import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './home.module.css';
import SearchList from '../search_list/searchList';
import Footer from '../footer/footer';

const Home = ({ authService }) => {
  const history = useHistory();
  const historyState = history.state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [cocktails, setCocktails] = useState(null);
  const inputRef = useRef();

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  });

  //get and set cocktail lists
  const showSearchResults = () => {};

  const onSearch = query => {
    //search on cocktails api
    console.log(query);
  };

  const onPassKeyword = e => {
    e.preventDefault();
    const value = inputRef.current.value;
    onSearch(value);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.quotes}>
          One tequila, two tequila, three tequila, floor
        </div>

        <button onClick={onLogout}>Sign out</button>

        <section className={styles.serach}>
          <h2>Search</h2>
          <form onSubmit={onPassKeyword}>
            <input type="text" placeholder="Search" ref={inputRef} />
            <button type="submit">Search</button>
          </form>
        </section>
      </div>

      {cocktails && <SearchList />}

      <Footer />
    </>
  );
};

export default Home;
