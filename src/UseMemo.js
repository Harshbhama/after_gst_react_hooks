import React, {useMemo, useState, useCallback} from 'react'



function UseMemo(){
    
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    const increament = () => {
        setCount(count + 1)
    }
    const increament1 = () => {
        setCount1(count1 + 1)
    }
    
    const isEven = useCallback(() => {
        let i=0;
        while(i<2000000000) i++;
        return count % 2 === 0
    }, [count])
    return(
        <div>
            <button onClick={increament}>button1 {count}</button>
            <span>{isEven ?'Even': 'Odd' }</span>
            <button onClick={increament1}>button2 {count1}</button>
        </div>
    )

}

export default UseMemo;