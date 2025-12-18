import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import Usercontextprovider from './context/Usercontextprovider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
      <h1>React video for context</h1>
      <Login/>
      <Profile/>
    </Usercontextprovider>
  )
}

export default App
