import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Home from './components/home/home';
import Picks from './components/picks/picks';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <nav className={styles.nav}>
          <ul className={styles.menus}>
            <li>
              <NavLink to="/home" aria-label="Go home">
                Cocktail Picks
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
          <Route path="/home">
            <Home />
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
