import HomePage from './components/HomePage';
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import DetailsPage from './components/DetailsPage';
import NotFound from './components/NotFound';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/details/:movieId" component={DetailsPage} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
