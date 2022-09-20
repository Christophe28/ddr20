import React, { useState } from 'react';
// import axios from 'axios';
import { NavLink } from 'react-router-dom';

// https://reactjsexample.com/a-react-form-that-will-hash-your-passwords-and-send-them-to-a-database/

const Home = () => {
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div>
            <h1>DDR20</h1>
            <input type="text" onChange={(e) => setPseudo(e.target.value)}/>
            <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button 
                type="button"
                onClick={(e) => console.log(e.target)}
            >
                Se connecter
            </button>
            <button 
                type="button"
                onClick={(e) => console.log(e.target)}
            >
                S'inscrire
            </button>
            <NavLink to="/game">
                vas y test un peu pour voir 
            </NavLink>
        </div>
    );
};

export default Home;