import React from 'react';
import { useParams } from 'react-router-dom';

const UserPage = () => {

    //Id proviene de el archivo HomePage.js

    const { id } = useParams()
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

export default UserPage;