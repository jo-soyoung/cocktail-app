import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Picks from './components/picks/picks';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <nav className={styles.nav}>
          <ul className={styles.menus}>
            <li>
              <NavLink exact to="/" aria-label="Go home">
                Cocktail App
              </NavLink>
            </li>
            <li>
              <NavLink to="/picks">Your Picks</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path={['/', '/login']} exact>
            <Login />
          </Route>
          <Route path="/picks">
            <Picks />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
