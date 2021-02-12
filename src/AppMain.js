import React from 'react'
import {  BrowserRouter} from 'react-router-dom'

import MainPanel from './components/MainPanel';
import Sidebar from './components/Sidebar';


function AppMain() {
  return (
    <div className="wrapper">
    <BrowserRouter>
      <MainPanel/>
      <Sidebar/>
     
     </BrowserRouter>
   
    </div>
   
  );
}

export default AppMain;
