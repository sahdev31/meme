import React from 'react'

export default function Counter(){
    const [userData, setUserData] = React.useState({})
    const [count, setCount] = React.useState(1)


    React.useEffect(function() {
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setUserData(data))
    },[count])


    return(
        <>
        <h1>Curren Count is = {count}</h1>
        <button onClick={()=> setCount(preCount => preCount + 1)}>Fetch Next User</button>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
        <div>
            {/* Hello my name is {JSON.stringify(userData)} */}
        </div>
        </>
    )
}