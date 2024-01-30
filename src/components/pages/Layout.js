import React from 'react'
import Header from '../../views/Header'
import Footer from '../../views/Footer'

const Layout = ({children}) => {
  return (<>   
   <Header/>
    <div>{children}</div>
    <Footer />
    </>
)
}

export default Layout