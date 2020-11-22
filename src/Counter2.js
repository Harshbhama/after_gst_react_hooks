import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter1 from './Counter1'
import Counter from './Counter'
import Counter3 from './Counter3'
class Counter2 extends React.Component{
 

  render(){
    return(
    <div>
        <Counter1
        render={(counter, onIncreament) => (
            <Counter counter={counter} onIncreament={onIncreament} />
        ) }
        />
        <Counter1 
        render={(counter, onIncreament) => {
            <Counter3 counter = {counter} onIncreament = {onIncreament} />
        }}
        />
    </div>
    )  
  }
}

export default Counter2;
