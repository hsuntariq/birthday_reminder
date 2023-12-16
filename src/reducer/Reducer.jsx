import React, { useReducer, useState } from 'react'
import SingleName from './SingleName'
import { reducer } from './reducer'

const Reducer = () => {

  const[name,setName] = useState('')
  // create an initial State

  const initialState = {
    names:[],
    error:false,
    success:false,
    message:''
  }


  const [state,dispatch] = useReducer(reducer,initialState); 


  const handleClick = (e)=>{
    e.preventDefault();
    if(!name){
      dispatch({type:'EMPTY'})
    }else{
      dispatch({type:'ADD',payload:{id:Date.now(),name}})
    }

    setTimeout(()=>{
      dispatch({type:'REMOVE'})
    },3000)


  }

  return (
    <>
        <div className="container col-lg-5 m-auto shadow p-4">
            <form>
                <h1 className='text-center display-3'>Add Name</h1>
                <label htmlFor="">Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className='form-control' />
                {state.error && <p className='text-danger fw-bold'>
                  {state.message}
                  </p>}
                {state.success && <p className='text-success fw-bold'>
                  {state.message}
                  </p>}
                <button onClick={handleClick}  className="btn btn-dark my-2 w-100">
                    Add Name
                </button>
            </form>
        </div>

        {state.names.map((n)=>{
          return <SingleName key={n.id} {...n} />
        })}
    </>
  )
}

export default Reducer