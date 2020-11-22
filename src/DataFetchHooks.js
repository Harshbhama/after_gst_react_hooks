import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchHooks(){

  const [countX, setCountX] = useState(1);
  const [change, setChange] = useState('');

 
const handleClick = () => {
    setChange(countX);
}
const changeText = (e) => {
    setCountX(e.target.value)
}
  useEffect(() => {
  
    axios({
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/posts/${countX}`
      }).then(response => {
          console.log(response)
      })
    
    
  }, [change])

    return(
        <div>
            <input type = "text" value = {countX} onChange = {(e) => changeText(e)} />
            <button onClick = {handleClick}>Get result</button>

        </div>

    
    )

}


export default DataFetchHooks;