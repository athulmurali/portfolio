import React from 'react'
import { HashRouter as HashRouter, Route } from 'react-router-dom';



import About from '../components/About'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'


import Link from "react-router-dom/es/Link";



const Router =()=>
    <HashRouter>
        <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
                    <Route exact path="/"       component={Home} />
                    <Route path="/about"        component={About} />
                    <Route path="/portfolio"    component={Portfolio}/>
                </div>
    </HashRouter>

export default Router;
