import React, { useState } from 'react'
import { data } from './data'

const Generator = () => {
    const [number,setNumber] = useState(0)
    const [lorems,setLorems] = useState([])
    const generateLorem = (e) => {
        e.preventDefault();
        let newData = data.splice(0,number);
        setLorems(newData)
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
                <button onClick={generateLorem} className="w-100 my-1 btn btn-info">
                    Generate Lorem
                </button>              
            </form>
        </div>
        <div className="container">
            {lorems.map((l)=>{
                return <p>{l}</p>    
            })}
        </div>
    </>
  )
}

export default Generator