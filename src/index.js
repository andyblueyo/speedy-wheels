import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import RequestForm from './RequestForm';
import Home from './Home';
import MyMap from './MyMap';
import SearchForm from './SearchForm'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

  ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={(props) => <SearchForm {...props}/>} />
        <Route path="/home" component={RequestForm}   />
        <Route path="/form" component={RequestForm}   />
        <Route path="/info" component={App}   />
        <Route path="/search" component={SearchForm}   />
        <Route path="/myMap" component={MyMap}   />

      </div>
    </Router>,
    document.getElementById('root')
  );
