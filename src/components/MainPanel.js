import React from 'react'

import Navbar from './Navbar'
import Content from './Content';
import Footer from './Footer';



const MainPanel = ()=>{
    return(
        <div className="main-panel">
  
     <Navbar/>
     <Content/>
     <Footer/>
    
        </div>
    )
}
export default MainPanel