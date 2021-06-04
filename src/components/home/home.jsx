import React, { useRef } from 'react';
import styles from './home.module.css';
import Footer from '../footer/footer';

const Home = ({ onSearch }) => {
  const inputRef = useRef();

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

        <section className={styles.serach}>
          <h2>Search</h2>
          <form onSubmit={onPassKeyword}>
            <input type="text" placeholder="Search" ref={inputRef} />
            <button type="submit">Search</button>
          </form>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
