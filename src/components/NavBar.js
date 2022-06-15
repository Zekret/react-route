import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/users'>Users</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;