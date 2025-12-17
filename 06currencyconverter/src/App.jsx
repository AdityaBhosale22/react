import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrencyConverter from './Currencyconverter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-indigo-300 min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Currency Converter</h1>
      <CurrencyConverter />
    </div>
  )
}

export default App
