import React from 'react';
import './App.scss';
import data from "./data.json"
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import { Route, Switch } from "react-router-dom";
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';

class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      works: data.works,
      sort: ""
    }
  }

  render()
  {
    return (

      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/"
            render={() => <Intro />}
          />
          <Route path="/portfolio"
            render={() => <Portfolio works={this.state.works} />}
          />
          <Route path="/about"
            render={() => <About />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
