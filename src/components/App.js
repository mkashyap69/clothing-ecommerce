import React from 'react';
import './styles/App.css';
import { HomePage } from './HomePage';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
