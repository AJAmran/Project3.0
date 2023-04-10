import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Outlet } from 'react-router-dom';
import Header from './Component/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
    <Outlet></Outlet>
    </div>
  )
}

export default App
