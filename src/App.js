import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import { Route, Switch } from "react-router-dom";
import Portfolio from './components/Portfolio/Portfolio';

function App()
{
  return (

    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() =>
          <Intro />} />
        <Route path="/portfolio" render={() => <Portfolio />} />
      </Switch>
    </div>
  );
}

export default App;
