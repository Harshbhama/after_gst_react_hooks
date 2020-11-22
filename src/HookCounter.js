import React, {useState, useEffect} from 'react'

function HookCounter(){

  useEffect(() => {

    console.log("In use Effect.")
  })

  const handleClick = () => {
    // console.log(prevCount)
    for(let i=0;i<5;i++){
      setCount(prevCount => prevCount + 1)

    }
  }

  const [count, setCount] = useState(0);
    return(

      <div>
       
          <button onClick = {handleClick}>{count}</button>
      </div>
    )

}


export default HookCounter;