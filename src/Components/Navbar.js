import React from 'react'

import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
<Link to="/home">
    Home
    </Link>
   &nbsp;
   <Link to="/contact">
    Contact
    </Link>
    &nbsp;
    <Link to="/products">
    Products
    </Link>
  

    </>
  )
}

export default Navbar