import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import Usercontextprovider from './context/Usercontextprovider'
import Logout from './components/Logout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
      <h1>React for context</h1>
      <Login/>
      <Profile/>
      <Logout/>
    </Usercontextprovider>
  )
}

export default App
