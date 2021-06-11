import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './home.module.css';
import SearchList from '../search_list/search_list';
import Footer from '../footer/footer';

const Home = ({ authService, onSearch, cocktails }) => {
  const history = useHistory();
  const historyState = history.location.state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const inputRef = useRef();

  const listLength = cocktails.length;
  const displayType = listLength !== 0 ? styles.list : undefined;

  console.log(cocktails);

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
  }, [authService, history]);

  const onSubmit = e => {
    e.preventDefault();
    const value = inputRef.current.value;
    onSearch(value);
  };

  return (
    <>
      <div className={styles.container}>
        <button onClick={onLogout} className={styles.logoutBtn}>
          Sign out
        </button>

        <section className={`${styles.search} ${displayType}`}>
          <h2 className={styles.searchTitle}>Search</h2>
          <form onSubmit={onSubmit} className={styles.searchForm}>
            <input type="text" placeholder="Search" ref={inputRef} />
            <button type="submit">
              <img
                src="./images/search.png"
                alt="Search"
                className={styles.searchBtnImg}
              />
            </button>
          </form>
        </section>
      </div>

      {displayType !== undefined && <SearchList cocktails={cocktails} />}
      <Footer />
    </>
  );
};

export default Home;
