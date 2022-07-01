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
                Inicio
            </NavLink>


            <NavLink
                className={({ isActive }) => (isActive ? "active" : "normal")}
                to='/about'>
                Curiosidades
            </NavLink>


            <NavLink
                className={({ isActive }) => (isActive ? "active" : "normal")}
                to='/users'
            >
                Canciones
            </NavLink>
        </div>
    );
};

export default NavBar;