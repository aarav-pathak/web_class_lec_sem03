import React, { createContext } from 'react'
import ChildB from './childB'


export const UserContext = createContext()

const ChildA = () => {

  const name = 'devessss'
  const age = 33

  return (
    <div>
      <h2>Child A (Provider)</h2>

      <UserContext.Provider value={{ name, age }}>
        <ChildB />
      </UserContext.Provider>
    </div>
  )
}

export default ChildA
