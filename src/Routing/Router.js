import React from 'react'
import { HashRouter, Route } from 'react-router-dom';

import About from '../components/About'
import Home from '../components/Home'
import Portfolio from '../containers/Portfolio'
import Navbar from "../containers/Navbar";



const Router =()=>
    <HashRouter>
        <div>
                    <Navbar/>
                    <Route exact path="/"       component={Home} />
                    <Route path="/about"        component={About} />
                    <Route path="/portfolio"    component={Portfolio}/>
                </div>
    </HashRouter>

export default Router;
