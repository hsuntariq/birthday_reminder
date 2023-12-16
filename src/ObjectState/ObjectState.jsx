import React, { useContext, useState } from 'react'
import { AppContext } from '../context2';

const ObjectState = () => {
   const data = useContext(AppContext);
   console.log(data)
    // destructure
    const {name,email,age,number} = data.user;
    const change = () => {
        setUser({...data.user,name:'ahmed',test:'new value'})
    }

  return (
    <>
        <h1 className='text-center'>
            {name}
        </h1>
        <h1 className='text-center'>
            {age}
        </h1>
        <h1 className='text-center'>
            {email}
        </h1>
        <h1 className='text-center'>
           
        </h1>
        <button onClick={change} className='d-block m-auto btn btn-danger'>
            change name
        </button>
    </>
  )
}

export default ObjectState