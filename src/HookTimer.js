import React , {useEffect, useRef, useState} from 'react'

function HookTimer(){

    const [counter, setCounter] = useState(0);
    const intervalRef = useRef();
    useEffect(() => {
         intervalRef.current = setInterval(() => {
            setCounter(prevState => prevState + 1);

        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    })

    return(
        <div>
            HookTimer - {counter}
                <button onClick={() => clearInterval(intervalRef.current)}>Clear Interval</button>
        </div>
    )

}
export default HookTimer