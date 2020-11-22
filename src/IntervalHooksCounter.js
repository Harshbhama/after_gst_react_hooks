import React, {useState, useEffect} from 'react'

function IntervalHooksCounter(){

  const [countX, setCountX] = useState(0);

 
  const tick = () => {
      setCountX(prevCountX => prevCountX + 1)
  }

  useEffect(() => {
  
    const interval = setInterval(tick, 1000)
    return () => {
     clearInterval(interval)
    }
  }, [])

    return(

      <div>
        <p style={{paddingLeft: '40%'}}>{countX}</p>
      </div>
    )

}


export default IntervalHooksCounter;