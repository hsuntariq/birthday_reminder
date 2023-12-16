import React, { useContext } from 'react'
import { AppContext } from './Person'

const Single = ({answer,id,question}) => {
    const data = useContext(AppContext);
    console.log(data)
  return (
    <>
        <div className="card w-25 p-3 my-1 mx-auto">
            <h1>{id}</h1>
            <button onClick={()=>remove(id)} className="btn btn-danger">
                Delete
            </button>
        </div>
    </>
  )
}

export default Single