import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,incrementByValue } from './state/CounterSlice'
function App() {

  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  console.log(count)
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100vw',height:'100vh'}}>

    <div style={{display:'flex',flexDirection:'column'}}>
     <p style={{border:' 1px solid rgb(195, 195, 8) ',textAlign:'center',borderRadius:'10px',padding:"15px"}}>COUNTER : {count}</p>
     <button onClick={()=> dispatch(increment())}>Increment</button>
     <button onClick={()=> dispatch(decrement())}>Decrement</button>
     <button onClick={()=> dispatch(incrementByValue(10))}>Increment By 10 </button>
    </div>
    </div>
  )
}

export default App
