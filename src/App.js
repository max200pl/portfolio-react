import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import { Route, Switch } from "react-router-dom";

function App()
{
  return (

    <div className="App">
      <Header />
      <Switch>
        <Route path="/"><Intro /></Route>
      </Switch>
    </div>
  );
}

export default App;
