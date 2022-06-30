import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/navbar.css'

const NavBar = () => {
    return (
        <div className='nav-container'>
            <NavLink
                className={({ isActive }) => (isActive ? "active" : "normal")}
                to='/'
            >
                Home
            </NavLink>


            <NavLink
                className={({ isActive }) => (isActive ? "active" : "normal")}
                to='/about'>
                About
            </NavLink>


            <NavLink
                className={({ isActive }) => (isActive ? "active" : "normal")}
                to='/users'
            >
                Users
            </NavLink>
        </div>
    );
};

export default NavBar;