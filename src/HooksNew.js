import React, {useState, useEffect} from 'react'

function HooksNew(){

  const [countX, setCountX] = useState('');
  const [countY, setCountY] = useState('');

  const logMouse = e => {
   setCountX(e.clientX);
   setCountY(e.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', logMouse)
    return () => {
      console.log("in compononet unmount");
      window.removeEventListener('mousemove', logMouse)
    }
  }, [])

    return(

      <div>
        <p style={{paddingLeft: '30%'}}>X : {countX}</p>
        <p style={{paddingLeft: '30%'}}>Y : {countY}</p>
      </div>
    )

}


export default HooksNew;