import React, {useContext} from 'react'
import {CountContext} from './UseReducerWithContext'
function UseReducerWithContext2(){
    const userContext = useContext(CountContext)
    return(
        <div>
            Component1 - {userContext.countVal}
            <button onClick = {() => userContext.countDispatch('increament')}>Increament</button>
            <button onClick = {() => userContext.countDispatch('decreament')}>Decreament</button>

        </div>
    )

}
export default UseReducerWithContext2;