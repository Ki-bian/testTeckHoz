import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import UrlForm from './components/UrlForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UrlForm} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
