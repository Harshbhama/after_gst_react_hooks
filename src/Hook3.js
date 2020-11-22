import React, {useState} from 'react'

function Hook3 (){

    const [name, setName] = useState({firstName: '', lastName: ''})

    return(
        <div>
            <input 
            type='text'
            value={name.firstName}
            onChange={(e) => setName({...name, firstName: e.target.value})}

            />
            <input 
            type='text'
            value={name.lastName}
            onChange={(e) => setName({...name, lastName: e.target.value})}

            />

            <p>First Name is {name.firstName}</p>
            <p>Last Name is {name.lastName}</p>

        </div>
    )
}
export default Hook3