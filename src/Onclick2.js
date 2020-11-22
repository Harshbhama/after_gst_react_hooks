import React from 'react';
import logo from './logo.svg';
import './App.css';



class Onclick extends React.Component{
  render(){
    return(
    <div>
  
      
      <button onClick = {this.props.increament}>Hello{this.props.counter}</button>
    </div>
    )  
  }
}

export default withCounter(Onclick);
