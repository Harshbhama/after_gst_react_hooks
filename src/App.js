import React from 'react';
import logo from './logo.svg';
import './App.css';
import withCounter from './withCounter'
import Onclick from './Onclick'

import RenderPropsExample from './RenderPropsExample'
import Counter from './Counter'

// import HookCounter from './HookCounter'
import Hook3 from './Hook3'
import HookArray from './HookArray'
import HookEffect from './HookEffect'
import IntervalHooksCounter from './IntervalHooksCounter'
import DataFetchHooks from './DataFetchHooks'
// import HooksNew from './HooksNew'
import IntervalClassCounter from './IntervalClassCounter'
import UseContext1 from './UseContext1'
import MultipleReducer from './MultipleReducer'
import CounterReducer from './CounterReducer'
import UseReducerWithContext from './UseReducerWithContext'
import UseMemo from './UseMemo'
import HookRef from './HookRef'
import HookTimer from './HookTimer'
import Es6 from './Es6'
class App extends React.Component{
  render(){
    return(
    <div>
      {/* <Onclick parent = "parentCLass"/> */}
      {/* <Component /> */}
      {/* <RenderPropsExample /> */}
      {/* <Counter2 /> */}
      {/* <HookCounter /> */}
      {/* <Hook3 /> */}

      {/* <HookArray /> */}
      {/* <HookEffect /> */}
      {/* <HooksNew /> */}
      {/* <IntervalClassCounter />
      <IntervalHooksCounter /> */}
      {/* <DataFetchHooks /> */}
      {/* <UseContext1 /> */}
      {/* <CounterReducer /> */}
      {/* <MultipleReducer /> */}
      {/* <UseReducerWithContext />  */}
      {/* <UseMemo /> */}
      {/* <HookRef /> */}
      <Es6 />
    </div>
    )  
  }
}

export default App;
