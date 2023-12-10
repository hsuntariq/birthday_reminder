import React, { useState } from 'react'

const ObjectState = () => {
    const [user,setUser] = useState({
        name:'Ali',age:23,email:'ali@mail.com',number:'0314324323'
    })
    // destructure
    const {name,email,age,number} = user;
    const change = () => {
        setUser({...user,name:'ahmed',test:'new value'})
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
            {user.test}
        </h1>
        <button onClick={change} className='d-block m-auto btn btn-danger'>
            change name
        </button>
    </>
  )
}

export default ObjectState