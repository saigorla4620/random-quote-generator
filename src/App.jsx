import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Random from './random-quote'

function App() {
  const [advice, setadvice] = useState("Click here and get your Quote")
  const [author,setauthor] = useState('')
  const [count,setcount] = useState(0)
 async function handlequote(){
  const res = await fetch("https://api.quotable.io/random")
  const data = await res.json()
  console.log(data)
  setadvice(data.content)
  setauthor(data.author)
  setcount((c)=>c+1)
 
 }

  return (
    <>
    <Random/>
    </>

  )
}

export default App
