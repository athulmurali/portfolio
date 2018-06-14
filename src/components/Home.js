import React from 'react'
import logo from '../logo.svg';
import avatar from '../myAvatar.svg'
const Home  =()=> (<div>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1 className="App-title">Hi, I am Athul</h1>
    </header>
    <div className="App-intro">

        <img src={avatar} className="avatar" alt="logo" />

        <div className="update-alert py-3">
            <h6> I am currently  renovating this website.</h6>
            <h6> All the content from my old website will be available in a week</h6>
        </div>

    </div>
</div>)
export default Home
