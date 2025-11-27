import { useState } from 'react'
import { Button } from './components/Button'
import { CounterDisplay } from './components/CounterDisplay'
import { Card } from './components/Card'
import { Input } from './components/Input'


function App() {
  const [value,setValue] = useState("");
  const [count,setCount] = useState(0)
  
  return (
    <Card>
      <Input
      value={value}
      placeholder="enter text"
      onChange={(e)=>setValue(e.target.value)}
      />
      <CounterDisplay count={count}/>
      <Button label="+10" action={()=>{setCount(count+10)}}/>
      <Button label="+100" action={()=>{setCount(count+100)}}/>
      <Button label="reset" action={()=>setCount(0)}/>
    </Card>
  )
}

export default App
