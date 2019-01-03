import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Login from './Login/Login';
import Callback from './Callback/Callback';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Home from './Home/Home';
import Scheduling from './Scheduling/Scheduling';
import Meeting from './Meeting/Meeting';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="main">
          <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/callback" component={Callback} />
              <Route exact path="/scheduling" component={Scheduling} />
              <Route path="/scheduling/:id" component={Meeting} />
              <Redirect to="/" />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;