import React from 'react';
import styles from './login.module.css';
import Footer from '../footer/footer';

const Login = props => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.quotes}>
          One martini is alright, two is too many, three is not enough
        </div>

        <section className={styles.login}>
          <h2>Sign in</h2>
          <ul className={styles.loginBtns}>
            <li>
              <button>Google</button>
            </li>
            <li>
              <button>GitHub</button>
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Login;
