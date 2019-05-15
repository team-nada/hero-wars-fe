import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './components/app.js';
import Game from './components/game.js';
import About from './components/about.js';
import Rules from './components/rules.js';
import './scss/core.scss';

const routing = (

  <Router>
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rules">Rules</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
      <Route exact path="/" component={App} />
      <Route path="/game" component={Game} />
      <Route path="/rules" component={Rules} />
      <Route path="/about" component={About} />
    </>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));


