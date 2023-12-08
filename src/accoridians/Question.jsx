import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import './styles.css'
const Question = ({question,answer}) => {

    const [isOpen,setIsOpen] = useState(false);


return (
<>
    <div className=" my-1 border rounded p-3 ">
        <div className="d-flex  justify-content-between align-items-center">

            <div className="text ">
                <h3>{question}</h3>
            </div>
            <div className="icon ">
                <FaPlus onClick={()=>setIsOpen(!isOpen) } size={25} color='green' cursor='pointer' />
            </div>
        </div>
        <p className={`text-secondary ${isOpen ? 'show' : 'para'}`}>
            {
                isOpen && answer
            }
        </p>
    </div>

</>
)
}

export default Question