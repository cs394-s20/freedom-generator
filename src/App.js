import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home.js';
import WelcomePage from './components/WelcomePage/WelcomePage.js';
import IDOCPage from './components/IDOCPage/IDOCPage.js';
import CustomizedInputs from './components/EmailForm/EmailForm';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import FAQ from './components/FAQ/FAQ';
import ExampleEmail from './components/ExampleEmail/ExampleEmail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/email" component={CustomizedInputs} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/faq" component={FAQ} />
        <Route path="/example" component={ExampleEmail} />
        <Route path="/idoc" component={IDOCPage} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;