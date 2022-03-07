import React from 'react'

export default function Counter(){
    const [userData, setUserData] = React.useState({})
    const [count, setCount] = React.useState(0)


    React.useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setUserData(data))
        console.log("running")
    })


    return(
        <>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
        <h1>Curren Count is = {count}</h1>
        <button onClick={()=> setCount(preCount => preCount + 1)}>Count ++</button>
        </>
    )
}