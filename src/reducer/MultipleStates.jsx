import React, { useState } from 'react'

const ReducerBasics = () => {
    const [name,setName] = useState('');
    const [empty,setEmpty] = useState(false);
    const [message,setMessage] = useState('');
    const [success,setSuccess] = useState(false);
    const [names,setNames] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        if(!name){
            setEmpty(true);
            setMessage('Please enter a name!')
        }else{
            setSuccess(true)
            setMessage('Added Successfully')
            setName('')
            setNames([...names,name])
        }


        setTimeout(()=>{
            setSuccess(false);
            setEmpty(false);
            setMessage('')
        },3000)
    }

  return (
    <>
        <div className="container col-lg-5 m-auto shadow p-4">
            <form>
                <h1 className='text-center display-3'>Add Name</h1>
                <label htmlFor="">Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className='form-control' />
                {empty && <p className='text-danger fw-bold'>
                    {message}    
                </p>}
                {success && <p className='text-success fw-bold'>
                    {message}    
                </p>}
                <button onClick={handleClick} className="btn btn-dark my-2 w-100">
                    Add Name
                </button>
            </form>
        </div>
        {names.map((n)=>{
            return (
                <>
                    <h4>{n}</h4>
                </>
            )
        })}
    </>
  )
}

export default ReducerBasics