import './App.css';
import {  BrowserRouter} from 'react-router-dom'

import MainPanel from './components/MainPanel';
import Sidebar from './components/Sidebar';
import Protected from './components/Layout/Protected'

function App() {
  return (
    <div className="wrapper">
    <BrowserRouter>
      <MainPanel/>
      <Sidebar/>
     
     </BrowserRouter>
   
    </div>
   
  );
}

export default App;
