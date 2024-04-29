import { useState } from "react"
import React from "react"


function Random() {
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

      <div className='main d-flex justify-content-center'>

        
        <div className=" w-50  text-center p-5">
        <h3 className="heading">Quote of the Day</h3>
        <hr className="hr" />
          
          <h4 className="quote">"{advice}"</h4> 
          <p className="author">- {author}</p>
  
  
          <button onClick={handlequote} className='btn btn-success'>Get Quote</button>
          {/* <p>you have read {count} quotes</p> */}
        </div>
        </div>
      

    )
  }
  
  export default Random