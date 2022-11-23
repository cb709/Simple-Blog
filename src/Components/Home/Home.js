import React, { useContext } from 'react';
import { DataContext } from '../../Context/PostContext';

const Home = () => {
    const {user} = useContext(DataContext)
    return (
        <div>
            <header></header>
            <h2>This Is Home</h2>
            <h3>{user.name}</h3>
        </div>
    );
};

export default Home;