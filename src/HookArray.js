import React, {useState, useEffect} from 'react'

function HookArray(){

    const [name, setName] = useState([])

    useEffect(() => {
        console.log("In use Effect")
    })

    const handleButton = () => {
        setName([
            ...name, {
                items: name.length,
                number: Math.random()
            }
        ])
    }
    return(
        <div>
            <button onClick = {handleButton}>Hello</button>
            {
                name.map((val, index) => {
                    return(<p>Number {val.number}</p>)
                })
            }
        </div>
    )
}
export default HookArray