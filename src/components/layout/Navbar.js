import React from 'react';
import { Link,NavLink } from "react-router-dom"
import { connect } from 'react-redux';

function Navbar(props) {

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">Employee Management System</Link>
                <ul className="right">
                    <li><NavLink to="/create">Add Employee</NavLink></li>
                    <li><NavLink to="/search">Search</NavLink></li>
                    <li><a onClick={props.signOut}>Logout</a></li>
                    <li><NavLink to="/" className="btn btn-floating pink loghten-1">WS</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;