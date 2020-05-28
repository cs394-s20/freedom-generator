import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import WelcomePage from './components/WelcomePage/WelcomePage';
import IDOCPage from './components/IDOCPage/IDOCPage';
import EligibilityPage from './components/EligibilityPage/EligibilityPage';
import EligibilityCriteria from './components/EligibilityCriteria/EligibilityCriteria';
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
        <Route path="/eligibility" component={EligibilityPage} />
        <Route path="/criteria" component={EligibilityCriteria} />
      </Switch>
    </Router>
  );
}

export default App;