import React from 'react'
import { MdDelete } from "react-icons/md";

const SingleTodo = ({todo,id,remove}) => {
  return (
    <>
        <div className="col-md-4">
            <div className="card">

            <div className="d-flex justify-content-between  my-1 p-4 rounded">
                <div className="text">

                <h4>
                    {todo}
                </h4>
                
                </div>
                <div className="icon">
                <MdDelete onClick={()=>remove(id)} size={20} color='red' cursor='pointer' />
                </div>
            </div>
            </div>

        </div>
    </>
  )
}

export default SingleTodo