import React, { useState } from 'react'

const BasicsInputs = () => {
const [name,setName] = useState('')
const handleClick = (e) => {
    e.preventDefault();
    console.log(name)
}
return (
<>
    <div className="container col-lg-5 m-auto shadow p-4">
        <h1 className="display-1 text-center">
            Controlled Inputs
        </h1>
        <form>
            <label htmlFor="">Name</label>
            <input
            className='form-control'
            type="text" 
            placeholder='Enter your name...'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <button onClick={handleClick} className='btn btn-success w-100 my-1'>
                Add Data
            </button>
        </form>
    </div>
</>
)
}

export default BasicsInputs