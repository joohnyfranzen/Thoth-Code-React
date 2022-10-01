import { Link } from "react-router-dom";
import React from "react";

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
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-li">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                    <li className="nav-li">
                        <Link className="nav-link" to="/myposts">Posts</Link>
                    </li>
                    <li className="nav-li">
                        <Link className="nav-link" to="/newpost">Newpost</Link>
                    </li>
                </ul>
            </div>
        </nav> 
    )
}