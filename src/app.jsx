import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import styles from './app.module.css';
import Home from './components/home/home';
import Picks from './components/picks/picks';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <nav>
          <ul>
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
          <Route path="/" exact>
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
