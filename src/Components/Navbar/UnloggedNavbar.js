import { Link } from "react-router-dom";
import React from "react";
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav">
                <div className="logo">
                        <img src="./logo.png" alt="" />
                </div>
                <ul className="nav-ul">
                    <li className="nav-li">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-li">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-li">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </nav> 
    )
}