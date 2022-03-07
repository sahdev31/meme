import React from 'react'


export default function Meme(){

    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randmImage: "https://i.imgflip.com/1ur9b0.jpg",
    })

    const [allMemes,setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])



    // const [image,setImage] = React.useState("https://i.imgflip.com/1ur9b0.jpg")
    function CallMe() {
        const randomNumber = Math.floor(Math.random() *allMemes.length)
        const url = allMemes[randomNumber].url

        setMeme(preMeme => ({
            ...preMeme,
            randmImage: url
        }))
    }


    function handleChange(event){
        const {name , value} = event.target
        setMeme(perMeme => ({
            ...perMeme,
            [name]: value
        }))
    }
    

    return(
        <div className='main'>
            <div className='form'>
                <input 
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                type="text"
                className='form--input'
                placeholder='Top-Text' />
                <input 
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                type="text" 
                className='form--input' 
                placeholder='Bottom-Text'/>
                <button className='form--btn' onClick={CallMe}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randmImage} className="meme--image" alt='memeImage'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}