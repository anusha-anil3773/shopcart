import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Main from '../components/main/main'
import Footer from '../components/Footer/Footer'
import Item from '../components/items/items'
import { SignUp} from '../pages/siginup'

function Home() {
  return (
    <div>
  
        <Navbar/>
        <Main/>
        <Item/>
        <Footer/>
    </div>
  )
}

export default Home


