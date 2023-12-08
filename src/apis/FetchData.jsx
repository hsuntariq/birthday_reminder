import React, { useEffect, useState } from 'react'
import SinglePerson from './SinglePerson';
import { Vortex } from 'react-loader-spinner';

const FetchData = () => {
    const [people,setPeople] = useState([]);
    const [loading,setLoading] = useState(false);
    const api = 'https://api.github.com/users';

    const fetchUser = async () =>{
        setLoading(true);
        const response = await fetch(api);
        const data = await response.json();
        setPeople(data);
        setLoading(false);
    }

    useEffect(()=>{
        fetchUser()
        console.log(people)
    },[])

    if(loading){
        return <div style={{
            height:'100vh',
            width:'100vw'
        }} className="flex justify-content-center align-items-center">

         <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
        </div>
    }


  return (
    <>
        
        <div className="container">
            <div className="row">

            {people.map((person)=>{
                return (
                    <>
                        <SinglePerson {...person} /> 
                    </>
                )
            })}
            </div>
        </div>
    </>
  )
}

export default FetchData