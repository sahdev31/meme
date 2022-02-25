import React from 'react'
import Header from './components/Header'
import Meme from './components/Meme'
import memeData from './memeData'

export default function App(){
    // const Image = memeData.map(item => {
    //     return(
    //         <div>
    //             <Image key={item.meme.id} {...item}/>
    //         </div>
    //     )
    // })

    return(
        <>
        <Header/>
        <Meme/>
        </>
    )
}

