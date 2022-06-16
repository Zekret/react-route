import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleClick}>
                Logout
            </button>
            <Link to='welcome'>
                Say Welcome
            </Link>
            <Routes>
                <Route path='/welcome' element={<p>Welcome</p>} />
            </Routes>
        </div>
    );
};

export default Dashboard;