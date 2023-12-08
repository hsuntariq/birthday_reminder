import React, { useEffect, useState } from 'react'

const BasicUseEffect = () => {
    const[test,setTest] = useState(0)

    useEffect(()=>{
        if(test === 0){
            document.title = 'WhatsApp'
        }else{
            document.title = `(${test}) new messages`
        }
    },[test])

  return (
    <>
        <div className="container text-center text-capitalize">
        <h1>{test}</h1>
        <button onClick={()=>setTest(test+1)} className="btn btn-dark">
            Click
        </button>
        </div>
    </>
  )
}

export default BasicUseEffect