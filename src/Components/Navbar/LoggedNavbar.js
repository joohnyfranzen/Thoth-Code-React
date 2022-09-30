import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/logout">Logout</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/myposts">My posts</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/newpost">Newpost</Link>
            </li>
            </ul>
        </nav> 
    )
}