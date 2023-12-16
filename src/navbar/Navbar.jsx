import React, { useContext, useRef } from 'react'
import '../ref/styles.css' 
import { RxHamburgerMenu } from "react-icons/rx";
import { AppContext } from '../context2';

const Navbar = () => {
    const data = useContext(AppContext)
    console.log(data)
    const items = useRef()
    const showItems = () => {

        items.current.classList.toggle('show2')

    }
  return (
    <>
        <div className="d-flex justify-content-between w-75 m-auto p-4 align-items-center nv">
            <div className="brand fs-1">
                React
            </div>
            <div ref={items} className="menu-items ">
                <ul re className='d-flex gap-4 list-unstyled fs-5 p-0 m-0'>
                    <li>Menu Item</li>
                    <li>Menu Item</li>
                    <li>Menu Item</li>
                    <li>Menu Item</li>
                    <li>Menu Item</li>
                </ul>
            </div>
            <div className="icon">
            <RxHamburgerMenu onClick={showItems} size={30} />
            </div>

        </div>
    </>
  )
}

export default Navbar