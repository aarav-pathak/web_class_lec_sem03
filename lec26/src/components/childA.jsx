import { createContext } from 'react'
import ChildB from './childB'

// eslint-disable-next-line react-refresh/only-export-components
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
