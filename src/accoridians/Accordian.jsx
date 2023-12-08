import React from 'react'
import Question from './Question'
import { questions } from './data'

const Accordian = () => {
  return (
    <>
        <div className="shadow p-4 container col-lg-7 mx-auto mt-3">
            <h1 className="display-1 text-center">
              Accordians
            </h1>
            {questions.map((item)=>{
              return  <Question key={item.id} {...item} />
            })}
        </div>
    </>
  )
}

export default Accordian