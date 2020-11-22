import React, {useState, useEffect} from 'react'


function HookEffect(){

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("in use Effect")
    }, [])
    useEffect(() => {
        // if(count)
        console.log("second use Effect")
    })
    return(
        <div>
             <input 
                type="text"
                value={name}
                onChange = {(e) => setName(e.target.value)}
                />
            <button onClick = {() => setCount(count+1)}>Count</button>
    <p>{name}</p>
        </div>
    )

}


export default HookEffect