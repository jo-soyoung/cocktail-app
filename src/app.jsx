import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './app.module.css';
import Home from './components/home/home';
import Picks from './components/picks/picks';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Cocktail App</Link>
              </li>
              <li>
                <Link to="/picks">Your Picks</Link>
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
        </div>
      </Router>
    </div>
  );
}

export default App;
