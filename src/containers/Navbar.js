import React from 'react'
import {Link} from "react-router-dom";

const Navbar=() => <nav className="navbar py-2 navbar-expand-lg navbar-dark bg-dark border-bottom-0 border-white">

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
        </li>

        <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
        </li>

        <li className="nav-item">
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </li>
    </ul>
</div>
</nav>


export default Navbar
