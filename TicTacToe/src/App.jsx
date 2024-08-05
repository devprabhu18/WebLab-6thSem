import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Board from './Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Tic Tac Toe</h1>
        <Board/>
      </div>
    </>
  )
}

export default App
