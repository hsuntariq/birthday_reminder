import React, { useState } from 'react'
import SingleTodo from './SingleTodo';

const Todo = () => {
    const [todo,setTodo] = useState('');
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [time,setTime] = useState('');
    const [data,setData] = useState([]);
    const removeTodo = (id) => {
        let newTodos = data.filter((items)=>{
            return items.id !== id;
        })
        setData(newTodos)
    }
    const handleClick = (e) => {
        e.preventDefault();
        setData([...data,{todo,name,age,time,id:Date.now()}])
        setTodo('')
    }
  return (
    <>
        <div className="container col-lg-5 mx-auto shadow p-4">
            <h1 className="display-4">
                TODOLIST
            </h1>
            <form>
                <label htmlFor="">Todo</label>
                <input value={todo} onChange={(e)=>setTodo(e.target.value)} className='form-control' type="text" placeholder='Enter your todo...' />
                <label htmlFor="">Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} className='form-control' type="text" placeholder='Enter your Name...' />
                <label htmlFor="">Age</label>
                <input value={age} onChange={(e)=>setAge(e.target.value)} className='form-control' type="number" placeholder='Enter your Age...' />
                <label htmlFor="">Time</label>
                <input value={time} onChange={(e)=>setTime(e.target.value)} className='form-control' type="time" placeholder='Enter your todo...' />
                <button onClick={handleClick} className='btn btn-dark my-2 w-100'>
                    Add todo
                </button>
            </form>
        </div>
        <div className="container col-lg-9 row mx-auto my-4">
            {data.map((item)=>{
                return <SingleTodo key={item.id} {...item} remove = {removeTodo} />
            })}
        </div>
    </>
  )
}

export default Todo