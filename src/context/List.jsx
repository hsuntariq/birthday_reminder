import React from 'react'
import Single from './Single'

const List = ({item}) => {
  return (
    <>
        {item.map((i)=>{
            return <Single {...i} />
        })}
    </>
  )
}

export default List