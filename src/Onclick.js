import React from 'react';
import logo from './logo.svg';
import './App.css';
import withCounter from './withCounter'


class Onclick extends React.Component{
  render(){
    return(
    <div>
      {this.props.name}
      {this.props.parent}
      <button onClick = {this.props.increament}>Hello{this.props.counter}</button>
    </div>
    )  
  }
}

export default withCounter(Onclick);
