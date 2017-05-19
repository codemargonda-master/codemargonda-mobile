import React, {Component} from 'react';
import Home from '../home/Home.js';
import Login from '../login/Login.js';
import Ccc from '../ccc/ccc.js';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/ccc' component={Ccc}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
