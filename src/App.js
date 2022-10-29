import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import { Route, Routes } from "react-router-dom";
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Form from './components/Form/Form';

class App extends React.Component {
    render() {
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
                    <Route path="/form"
                        element={<Form />}
                    />
                    <Route path="*"
                        element={<NotFoundPage />}
                    />
                    <Route path="/not-found"
                        element={<NotFoundPage />}
                    />
                </Routes>
            </div>
        );
    }
}

export default App;
