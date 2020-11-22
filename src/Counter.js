import React from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends React.Component{
    constructor(props){
        super(props)

    }
  
  render(){
    return(
    <div>
        <button onClick = {this.props.onIncreament}>Click {this.props.counter}</button>
    </div>
    )  
  }
}

export default Counter;
