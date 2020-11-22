import React from 'react';
import logo from './logo.svg';
import './App.css';

class Counter3 extends React.Component{
    constructor(props){
        super(props)

    }
  
  render(){
    return(
    <div>
        <button onHover = {this.props.onIncreament}>Click {this.props.counter}</button>
    </div>
    )  
  }
}

export default Counter3;
