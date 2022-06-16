import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
    const id = 'yo'
    return (
        <div>
           <h1>App</h1>
           <Link to={`/users/${id}`}>Usuarios</Link>
        </div>
    );
};

export default Inicio;