import React from 'react';
import './App.css';

class Es6 extends React.Component{

    constructor(props){
        super(props);
        this.learnEs6 = this.learnEs6.bind(this)
    }

    componentDidMount(){
        this.learnEs6();
    }

    learnEs6(){
        console.log("In es6")
        // var m = new Map();
        // m.set("hello", 42);
        // m.set("hello1", 43);
        // m.set("hello", 45);
        // console.log(m)
        // var get = m.get("hello")
        // console.log(get);
        var s = new Set();
        s.add("hello").add("goodbye").add("hello");
        console.log(s);
        var has = s.has("hello")
        console.log(has)
    }
  render(){
    return(
    <div>
        <p>Hello</p>
    </div>
    )  
  }
}

export default Es6;
