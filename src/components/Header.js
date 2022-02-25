import React from 'react'
import img from '../images/logo-1.png'


export default function Header(){
    return(
        <header className='header'>
        <img src={img} alt='' className='header--img'/>
        <h2 className='header--title'>Meme Generator</h2>
        </header>
    )
}