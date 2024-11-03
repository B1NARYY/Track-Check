import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Track & Check</h1>
            <Link to="/login"><button>Přihlásit se</button></Link>
            <Link to="/register"><button>Registrovat</button></Link>
        </div>
    );
};

export default Home;
