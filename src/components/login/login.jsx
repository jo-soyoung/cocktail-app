import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';
import Footer from '../footer/footer';

const Login = ({ authService }) => {
  const history = useHistory();

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToApp(user.uid);
    });
  });

  const goToApp = userId => {
    history.push({
      pathname: '/home',
      state: { id: userId },
    });
  };

  const onLogin = e => {
    e.preventDefault();
    authService //
      .login(e.currentTarget.textContent)
      .then(data => goToApp(data.user.uid));
  };

  return (
    <>
      <div className={styles.container}>
        <section className={styles.login}>
          <h2 className={styles.loginTitle}>Sign in</h2>
          <ul className={styles.loginBtns}>
            <li>
              <button onClick={onLogin}>Google</button>
            </li>
            <li>
              <button onClick={onLogin}>Facebook</button>
            </li>
            <li>
              <button onClick={onLogin}>Github</button>
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Login;
