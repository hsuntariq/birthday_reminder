import React, { createContext, useState } from 'react'
import {data} from './data'
import List from './List';

export const AppContext = createContext();


const Person = () => {
    const [items,setItems] = useState(data);
    const removePerson = (id) => {
        let newItem = items.filter((i)=>{
            return i.id !== id;
        })  
        setItems(newItem)
    }
  return (
    <AppContext.Provider value={{
        removePerson,
        items
    }}>
        <List item={items} remove={removePerson} />
    </AppContext.Provider>
  )
}

export default Person