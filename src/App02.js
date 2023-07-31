import { useEffect, useState } from "react"

export default function App02(){
  const [count,setCount] = useState(0);
  const [minus,setMinus] = useState(0);
  useEffect(() => {console.log(`count : ${count} minus : ${minus}`)})
  return(
    <>
    <h1>{count},{minus}</h1>
    <button type="button" onClick={() => setCount(() => count +1)}>first</button>
    <button type="button" onClick={() => setMinus(() => minus -1)}>second</button>
    </>
  )
}