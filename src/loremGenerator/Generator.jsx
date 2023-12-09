import React, { useEffect, useState } from 'react'
import { data } from './data'
import Lorem from './Lorem';

const Generator = () => {
    const [number,setNumber] = useState('')
    const [lorem,setLorem] = useState([]);
    const [error,setError] = useState(false);
    const [errMessage,setErrMessage] = useState('')
    useEffect(()=>{
        if(number > data.length - 1){
            setLorem([]);
            setError(true)
            setErrMessage('number should be less than 24')
        }else if(number < 0){
            setError(true)
            setErrMessage('number should be greater than 0')
        }
        
        else{
            setLorem(data.slice(0,number))
            setError(false);
        }
    },[number])
    
    const generateLorem = (e) => {
        e.preventDefault();
       
       
       
     
    }
  return (
    <>
        <div className="container p-5 shadow col-lg-5 mx-auto my-3">
            <form>
                <h4 className="text-center display-4">
                    Lorem Generator
                </h4>
                <label htmlFor="">Number</label>
                <input value={number} onChange={(e)=>setNumber(e.target.value)} className='form-control' type="number" placeholder='e.g. 5' />
                {
                    error && <p className='text-danger fw-bolder'>
                        {errMessage}
                    </p>
                }
                <button onClick={generateLorem} className="w-100 my-1 btn btn-info">
                    Generate Lorem
                </button>              
            </form>
        </div>
        <div className="container col-lg-5 mx-auto my-3">
            {lorem.map((item,index)=>{
                return <Lorem key={index} text = {item} />
            })}
        </div>
    </>
  )
}

export default Generator