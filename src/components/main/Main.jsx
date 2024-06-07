import React, { useState } from 'react'
import Card from './Card'
import Inputs from './Inputs'

const Main = () => {
  const [userDetails,setUserDetails] = useState({})

  function onSubmit(props){
    setUserDetails(props)
  }
  return (
   <main>
    <Card panNo={userDetails} />
    <Inputs onSubmit={onSubmit}/>
   </main>
  )
}

export default Main
