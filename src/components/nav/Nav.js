import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Nav = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <Link to="/">Home</Link><br/>
            <Link to="/create">Create</Link><br/>
            <Link to="/edit">Edit</Link><br/>
            {
                user?.email ?
                <button className="navtxt" onClick={logOut} >Log-out</button> 
                :
                <Link className="txtnav" to="/login">Log-in</Link>
            }
           <br/>
            {
                <a href="#login">Signed in as {user?.displayName}</a>
            }

        </div>
    );
};

export default Nav;