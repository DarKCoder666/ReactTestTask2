import React, { Component } from 'react'
import './App.css'

import { Router, Route, Switch } from 'react-router-dom';

// History for router
import history from './history';

// Store for redux
import store from './store';
import { Provider } from 'react-redux';

import Home from './components/Home'
import Header from './components/Header'
import AddPost from './components/AddPost'
import Login from './components/Login'
import News from './components/News'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />

          <Router history={history}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/news" exact component={News} />
              <Route path="/addPost" exact component={AddPost} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </Router>

        </div>
      </Provider>
    );
  }
}

export default App;