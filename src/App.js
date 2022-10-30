import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import { Route, Routes, useNavigate } from "react-router-dom";
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Form from './components/Form/Form';

const App = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    const navigate = useNavigate()

    React.useEffect(() => {
        if (!isLoggedIn) {
            navigate('/form')
        }
    })

    return <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Intro onLogout={logoutHandler} />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form onLogin={loginHandler} />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/not-found" element={<NotFoundPage />} />
        </Routes>
    </div>;
};
export default App;
