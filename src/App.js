import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import CustomizedInputs from './components/EmailForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/email" component={CustomizedInputs} />
      </Switch>
    </Router>
  );
}

export default App;