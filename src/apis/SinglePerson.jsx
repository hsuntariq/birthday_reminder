import React from 'react'

const SinglePerson = ({avatar_url,login,organizations_url}) => {
  return (
    <>
        <div className="col-md-3">
            <div className="card my-1 p-3 rounded-0">
                <img src={avatar_url} alt="" />
                <h6>{login}</h6>
                <a href="">{organizations_url}</a>
            </div>
        </div>
    </>
  )
}

export default SinglePerson