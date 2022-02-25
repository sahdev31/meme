import React from 'react'
import memeData from '../memeData'


export default function Meme(){

    const [image,setImage] = React.useState("https://i.imgflip.com/1ur9b0.jpg")
    function CallMe() {
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() *memesArray.length)
        setImage(memesArray[randomNumber].url)
        //memesArray[randomNumber].url
    }



    
    return(
        <div className='main'>
            <div className='form'>
                <input type="text" className='form--input' placeholder='Top-Text' />
                <input type="text" className='form--input' placeholder='Bottom-Text'/>
                <button className='form--btn' onClick={CallMe}>Get a new meme image</button>
            </div>
            <div>
                <img src={image} alt="" className='meme--image'/>
            </div>
        </div>
    )
}