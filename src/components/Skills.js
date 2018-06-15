import React from 'react'
const Skills = ()=>(<div></div>)
import * from './img/'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('', false, /\.(png|jpe?g|svg)$/));

<img src={images['doggy.png']} />




export default Skills
