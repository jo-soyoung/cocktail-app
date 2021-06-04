import React from 'react';
import styles from './login.module.css';
import Footer from '../footer/footer';

const Login = props => {
  return (
    <div>
      <div>One martini is alright, two is too many, three is not enough</div>

      <section>
        <h2>Sign in</h2>
        <ul>
          <li>
            <button>Google</button>
          </li>
          <li>
            <button>GitHub</button>
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
