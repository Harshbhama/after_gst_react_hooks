import React, {useState, useEffect, useContext} from 'react'

import {UserContext} from './UseContext1'
function UseContext3(){

    const user = useContext(UserContext);
    return(

      <div>
        {user}
      </div>
    )

}


export default UseContext3;