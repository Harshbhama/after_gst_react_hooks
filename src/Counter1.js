import React from 'react';
import logo from './logo.svg';
import './App.css';

class Counter1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    this.onIncreament = this.onIncreament.bind(this)
    }
    onIncreament(){
        console.log("in increame")
        this.setState({
            counter: this.state.counter+1
        })
    }

  render(){
    return(
    <div>
       {this.props.render(this.state.counter, this.onIncreament)}
    </div>
    )  
  }
}

export default Counter1;
