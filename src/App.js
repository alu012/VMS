import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Global.css';

//Components staff
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Pages staff
import Welcome from './pages/Welcome';
import PricingPlans from './pages/PricingPlans';
import Register from './pages/Register';
import ErrorPage from './pages/Error';

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 100px)' }}>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/pricing-plans" component={PricingPlans} />
          <Route exact path="/register" component={Register} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
