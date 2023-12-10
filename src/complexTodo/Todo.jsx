import React, { useState } from 'react'
// import SingleTodo from './SingleTodo';

const Todo = () => {

    const [data,setData] = useState({
        todo:'',name:'',age:'',time:''
    });

    const {todo,name,age,time} = data;

    
    const handleClick = (e) => {
        e.preventDefault();
       
    }

    // handle the input change

    const handleChange = (e) => {
        // get the field name
            // console.log(e.target.name)
        // get the field value
            // console.log(e.target.value)
        setData((prevValues)=>({
            ...prevValues,
            [e.target.name] : e.target.value
        }))
    }


  return (
    <>
        <div className="container col-lg-5 mx-auto shadow p-4">
            <h1 className="display-4">
                TODOLIST
            </h1>
            <form>
                <label htmlFor="">Todo</label>
                <input name='todo' value={todo} onChange={handleChange} className='form-control' type="text" placeholder='Enter your todo...' />
                <label htmlFor="">Name</label>
                <input name='name' value={name} onChange={handleChange} className='form-control' type="text" placeholder='Enter your Name...' />
                <label htmlFor="">Age</label>
                <input name='age' value={age} onChange={handleChange} className='form-control' type="number" placeholder='Enter your Age...' />
                <label htmlFor="">Time</label>
                <input name='time' value={time} onChange={handleChange} className='form-control' type="time" placeholder='Enter your todo...' />
                <button onClick={handleClick} className='btn btn-dark my-2 w-100'>
                    Add todo
                </button>
            </form>
        </div>
       
    </>
  )
}

export default Todo