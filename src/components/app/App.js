import React, {Component} from 'react';
import Home from '../home/Home.js';
import Login from '../login/Login.js';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
