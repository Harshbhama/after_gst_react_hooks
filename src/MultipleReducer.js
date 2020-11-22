import React, {useReducer} from 'react'


const initialState = 0

const reducer = (state, action) => {
    switch (action){
        case 'increament':
            return  state + 1
        case 'decreament':
            return  state - 1
            default:
            return state
    }
}


function MultipleReducer(){

    const [counter, dispatch] = useReducer(reducer, initialState)
    const [counterTwo, dispatchTwo] = useReducer(reducer, initialState)

    return(

      <div>
          <div>Count - {counter}</div>
        <div> Second Counter = {counterTwo}</div>
          <button onClick = {() => dispatch('increament')}>Increament</button>
          <button onClick = {() => dispatch('decreament')}>Decreament</button>

          <button onClick = {() => dispatchTwo('increament')}>IncreamentTwo</button>
          <button onClick = {() => dispatchTwo('decreament')}>DecreamentTwo</button>

      </div>
    )

}


export default MultipleReducer;