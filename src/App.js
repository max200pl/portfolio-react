import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import { Route, Routes } from "react-router-dom";
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';


class App extends React.Component
{
  render()
  {
    return (

      <div className="App">
        <Header />
        <Routes>
          <Route path="/"
            element={<Intro />}
          />
          <Route path="/portfolio"
            element={<Portfolio />}
          />
          <Route path="/about"
            element={<About />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
