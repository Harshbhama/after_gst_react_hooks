import React from 'react';
import logo from './logo.svg';
import './App.css';

class User extends React.Component{
  render(){
    return(
    <div>
        {this.props.render(false)}
    </div>
    )  
  }
}

export default User;
