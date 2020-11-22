import React from 'react';
import logo from './logo.svg';
import './App.css';



const withCounter = WrapperComponent => {

    class NewComponent extends React.Component{
        constructor(props){
            super(props);

            this.state = {
                counter: 0
            }
            this.increament = this.increament.bind(this)
        }

        increament = () => {
            this.setState({
                counter: this.state.counter +1
            })
        }

        render(){
            return (
            
            <WrapperComponent 
            name = "harsh" 
            counter = {this.state.counter} 
            increament = {this.increament}
            {...this.props}
            />
            
            )
        }

    }
    return NewComponent
}
export default withCounter