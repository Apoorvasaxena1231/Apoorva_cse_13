import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
<<<<<<< HEAD

function App() {

  const [count, setCount] = useState(0)
const increment = () => {
setCount(count + 1)
}
const decrement = () => {
setCount(count - 1)
}
const reset = () => {
setCount(0)
}

  return (
    <>
     <h2>React Counter Application</h2>
<h2>{count}</h2>
<button onClick={increment}>Increment</button>
<br /><br />
<button onClick={decrement}>Decrement</button>
<br /><br />
<button onClick={reset}>Reset</button> 
=======
import Student from './Student'

function App() {


  return (
   <>
   <h2>Student Information</h2>
<Student name="Raj" course="B.tech" marks="90" />
<Student name="Ram" course="M.tech" marks="95" />
<Student name="Rohan" course="MCA" marks="99" />
>>>>>>> 6e9ecef39b93f12d15653586233ff43044783c2d
    </>
  )
}

export default App
