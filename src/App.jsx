import { Home } from 'components';
import AppState from 'context/appContext/appState';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';

function App() {
  return (
    <AppState>
      <Router>
        <Fragment>
          <div className={styles.container}>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </AppState>
  );
}

export default App;
