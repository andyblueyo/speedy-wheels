import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import RequestForm from './RequestForm';
import Home from './Home';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

  ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={(props) => <App {...props}/>} />
        <Route path="/home" component={Home}   />
        <Route path="/form" component={RequestForm}   />
      </div>
    </Router>,
    document.getElementById('root')
  );
