import { useState } from 'react'

export default function MyInput() {
  const [text, setText] = useState('hello')

  function handleChange(e) {
    setText(e.target.value)
    console.log('working')
  }

  return (
    <>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <input value={text} onChange={handleChange} />
      <p>{text}</p>
      <p>{text}</p>
      <p>{text}</p>
      <p>{text}</p>
      <p>{text}</p>
    </>
  )
}
