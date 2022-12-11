import { useCallback, useState } from 'react'

import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const onClick = useCallback(() => setCount((count) => count + 1), [])

  return (
    <div className='App flex flex-col items-center'>
      <h1 className='text-6xl font-bold underline'>Hello world!</h1>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button type='button' onClick={onClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
