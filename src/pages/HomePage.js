import React from 'react';
import { Link } from 'react-router-dom';
import '../style/HomePage.css'

const Inicio = () => {
    //Se usa id para el uso de params.
    const id = 'user'
    return (
        <div className='container-home'>
           <h1>Bienvenido</h1>
           <Link to={`/users/${id}`}>Lista</Link>
        </div>
    );
};

export default Inicio;