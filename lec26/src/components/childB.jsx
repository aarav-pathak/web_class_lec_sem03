import ChildC from './childC'

const ChildB = () => {
  return (
    <div>
      <h2>Child B (Pass-through)</h2>
      <ChildC />
    </div>
  )
}

export default ChildB
