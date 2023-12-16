import React, { useRef } from 'react'
import './styles.css'
const RefBasics = () => {

    const color = useRef();
    const head = color.current;
    const changeColor = () => {
       
        if(head.style.color == 'black'){
            head.style.color = 'red'
        }else{
            head.style.color = 'black'
        }
        
    }

  return (
    <>
        <h1 ref={color}>Hello world</h1>
        <button onClick={changeColor} className='btn btn-dark'>
            Change 
        </button>
    </>
  )
}

export default RefBasics