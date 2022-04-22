import React from 'react'
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Products from './Components/Products'
import Navbar from './Components/Navbar'
import Mobile from './Components/Mobile'
import Laptop from './Components/Laptop'
import Users from './Components/Users'
const App = () => {
  return (
  <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" elements={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products" element={<Products/>}>
        <Route path="/products/mobile" element={<Mobile/>}/>
        <Route path="/products/laptop" element={<Laptop/>}/>
        </Route>
      <Route path="/users/:usersid" element={<Users/>}/>

    </Routes>
  </Router>
  </>
  )
}

export default App