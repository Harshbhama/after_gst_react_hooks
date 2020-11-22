import React, {useReducer} from 'react'

import UseReducerWithContext2 from './UseReducerWithContext2'

const initialState = 0;
export const CountContext = React.createContext();

const reducer = (state, action) => {
    switch(action){
        case 'increament':
             return state +1
        case 'decreament':
            return state - 1
        default:
            return state
    }
}

function UseReducerWithContext(){
    const [count, dispatch] = useReducer(reducer, initialState);

    return(
        <CountContext.Provider value = {{countVal: count, countDispatch: dispatch}}>
        <div>
            Count - {count}
            <button onClick = {() => dispatch('increament')}>Increament</button>

                <UseReducerWithContext2 />
            
        </div>
        </CountContext.Provider>
    )

}

export default UseReducerWithContext;