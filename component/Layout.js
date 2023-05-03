import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

//props are used for passing data from one component to another here children is prop

const Layout = ({children}) => {
  return (
    <> 
      <Navbar/>
        {children}
      <Footer/>
    </>
  )
}

export default Layout