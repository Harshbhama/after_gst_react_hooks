import React, {useState, useEffect} from 'react'
import UseContext2 from './UseContext2'

export const UserContext = React.createContext()
function UseContext1(){


    return(

      <div>
        <UserContext.Provider value = {'Harsh'}>
            <UseContext2 />
        </UserContext.Provider>
      </div>
    )

}


export default UseContext1;