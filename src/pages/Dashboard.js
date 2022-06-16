import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div>
            <Outlet />
            <button onClick={handleClick}>
                Logout
            </button>
            <Link to='welcome'>
                Say Welcome
            </Link>
            <Link to='goodbye'>
                Say GoodBye
            </Link>
        </div>
    );
};

export default Dashboard;