import React, { useState } from 'react'
const Button=({id,label})=>{
  const [clickCount, setClickCount]=useState(0);
  const handleClick=()=>{
    setClickCount(clickCount+1);
    alert(`Button ${id} clicked`);
  }
  return(
    <button onClick={handleClick}>{label} clicked {clickCount} times</button>
  )
  

}
const App=()=>{
  return(
    <div>
      <Button id={'1'} label={'Button 1'}></Button>
      <Button id={'2'} label={'Button 2'}></Button>
      <Button id={'3'} label={'Button 3'}></Button>
    </div>    
  )
}
export default App;
