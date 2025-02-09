import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import News from './components/News';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? 'dark-mode' : ''}>
            <Router>
                {isLoggedIn && <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}
                <Routes>
                    <Route 
                        path="/" 
                        element={isLoggedIn ? <Navigate to="/news/general" /> : <Login onLogin={handleLogin} />} 
                    />
                    {isLoggedIn && (
                        <>
                            <Route path="/news/:category" element={<News />} />
                        </>
                    )}
                </Routes>
            </Router>
        </div>
    );
};

export default App;
