import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Products = () => {
  return (
   <>
   <br/>

   Products:
<br/>
<Link to="/products/mobile">
   Mobileslist
   </Link>
   <br/>
   <Link to="/products/laptop">
   Laptoplist
   </Link>
   <Outlet/>
   </>
  )
}

export default Products