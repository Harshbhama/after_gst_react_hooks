import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User'
class RenderPropsExample extends React.Component{
  render(){
    return(
    <div>
        <User render={(isLogger)  => (isLogger) ? 'Harsh': 'No'}
          
        />
    </div>
    )  
  }
}

export default RenderPropsExample;
