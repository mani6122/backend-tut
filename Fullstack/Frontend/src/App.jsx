import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setjokes(res.data)
      }).catch((err) => {
        console.log(err)
      })  
  }) 
  return (
    <>
      <h1>Hello Mani</h1>
      <p>jokes:{jokes.length}</p>
      <div>
        {jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.joke}</p>
          </div>
        ))}
        </div>
    </>
  )
}

export default App
