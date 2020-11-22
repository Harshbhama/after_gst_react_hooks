import React from 'react'


class IntervalClassCounter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tick: 0
        }
    }
    setTick = () => {
        this.setState({
            tick: this.state.tick + 1
        })
    }

    componentDidMount(){
        this.interval = setInterval(this.setTick, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
  render(){
    return(

    <div style={{paddingLeft: '40%'}}>
        
      {this.state.tick}
    </div>
    )  
  }
}

export default IntervalClassCounter;
