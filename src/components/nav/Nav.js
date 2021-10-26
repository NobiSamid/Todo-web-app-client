import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="/edit">Edit</Link>
        </div>
    );
};

export default Nav;