import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Screens/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Something</Link>
            </li>
          </ul>
        </nav> 
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
