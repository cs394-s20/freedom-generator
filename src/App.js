import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home.js';
import CustomizedInputs from './components/EmailForm/EmailForm';

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