import React from 'react'

const SingleName = ({id,name}) => {
  return (
    <>
        <div className="card p-3 container mb-1">
            <h4>{name}</h4>
        </div>
    </>
  )
}

export default SingleName