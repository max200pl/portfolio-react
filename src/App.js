import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.scss';
import About from './views/About/About';
import LogIn from './views/LogIn/LogIn';
import Header from './views/Header/Header';
import Intro from './views/Intro/Intro';
import NotFoundPage from './views/NotFoundPage/NotFoundPage';
import Portfolio from './views/Portfolio/Portfolio';

const App = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        //* записываем данные в localStorage
        //* запускается после того как компонента обрисовались 
        //* если не заданные [] то отрисовалась всего раз и все  
        //*
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
            <Route path="/form" element={<LogIn onLogin={loginHandler} />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/not-found" element={<NotFoundPage />} />
        </Routes>
    </div>;
};
export default App;
