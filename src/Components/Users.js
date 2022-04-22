import React from 'react'
import { useParams } from 'react-router'

const Users = () => {
  let {usersid}=useParams();
  return (
   <>
   <br/>
   User &nbsp; {usersid}

   </>
  )
}

export default Users