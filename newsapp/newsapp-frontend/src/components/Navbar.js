import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ toggleDarkMode, darkMode }) => {
    return (
        <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
            <div className="navbar-left">
                <h1>QUICKWATCH</h1>
            </div>
            <ul className="navbar-links">
                <li>
                    <NavLink
                        to="/news/general"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        General
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/news/business"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Business
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/news/sports"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Sports
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/news/technology"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Technology
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/news/entertainment"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Entertainment
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/news/health"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Health
                    </NavLink>
                </li>
            </ul>
            <div className="navbar-right">
                <button onClick={toggleDarkMode} className="dark-mode-toggle">
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
