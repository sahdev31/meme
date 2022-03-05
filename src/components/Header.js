import React from 'react'
import img from '../images/logo-1.png'


function test(){
    return(
        <ul>
            <li>This item will be displayed when you hover over</li>
        </ul>
    )
}

export default function Header(){
    return(
        <header className='header' onMouseOver={test}>
        <img src={img} alt='' className='header--img'/>
        <h2 className='header--title'>Meme Generator</h2>
        </header>
    )
}