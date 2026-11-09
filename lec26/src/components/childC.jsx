import { useContext } from 'react'
import { UserContext } from './childA'

const ChildC = () => {
  const { name, age } = useContext(UserContext)

  return (
    <div>
      <h3>Child C (Consumer)</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default ChildC
