import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home'
import AllBeer from './AllBeer'
import BeerDetails from './BeerDetails'
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route exact path='/allbeer' component={AllBeer} />
        <Route exact path='/beer/:beerid' component={BeerDetails} />
        <Route exact path='/random' component={BeerDetails} />
        <Route exact path='/new' component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
