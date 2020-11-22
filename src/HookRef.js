import React , {useEffect, useRef} from 'react'

function HookRef(){


    const inputRef = useRef(null)

    useEffect(() => {
        console.log("In hook ref")
        inputRef.current.focus();
    }, [])
    return(
        <div>
            <input type='text' ref = {inputRef}/>            
        </div>
    )

}
export default HookRef

