import React, {Component} from 'react';
import './App.css';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Home from './components/Home'
import MainRouting from './components/MainRouting'
import {history} from './helpers/History';
import {Router, Route, Switch} from 'react-router-dom';

export default class App extends Component {
  render() {
    console.log("Here", process.env.PUBLIC_URL)
    console.log("Here", this.props)
    return (
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
          <MainRouting exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route
            component={() => (
            <div>404 Not found
            </div>
          )}/>
        </Switch>
      </Router>
    )
  }
}