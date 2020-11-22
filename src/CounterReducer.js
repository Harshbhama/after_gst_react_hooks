import React, {useReducer} from 'react'


const initialState = {
    firstCounter: 0,
    secondCounter: 0
}

const reducer = (state, action) => {
    switch (action.type){
        case 'increament':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decreament':
            return {...state,firstCounter: state.firstCounter - action.value}
        case 'increament2':
            return {...state,secondCounter: state.secondCounter + action.value}
        case 'decreament2':
            return {...state,secondCounter: state.secondCounter - action.value}

        default:
            return state
    }
}


function CounterReducer(){

    const [counter, dispatch] = useReducer(reducer, initialState)

    return(

      <div>
          <div>Count - {counter.firstCounter}</div>
            <div> Second Counter = {counter.secondCounter}</div>
          <button onClick = {() => dispatch({type: 'increament', value: 1})}>Increament1</button>
          <button onClick = {() => dispatch({type: 'decreament', value: 1})}>Decreament1</button>

          <button onClick = {() => dispatch({type: 'increament', value: 5})}>Increament5</button>
          <button onClick = {() => dispatch({type: 'decreament', value: 5})}>Decreament5</button>

        <button onClick = {() => dispatch({type: 'increament2', value: 1})}>Second Increament</button>
        <button onClick = {() => dispatch({type: 'decreament2', value: 1})}>Second Decreament</button>
      </div>
    )

}


export default CounterReducer;