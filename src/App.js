// import logo from './logo.svg';
import './App.css';
import React from 'react';
import './styling/side-top-nav-bars.css';
import { Link } from "react-router-dom";



// import SideBar from './components/side-top-nav-bars';
// import './styling/campus.css';

import { BrowserRouter,Routes,Route} from 'react-router-dom';
// import SideBar from './components/side-top-nav-bars';
import NavSidebar from './components/side-top-nav-bars';
import BodySec from './components/body-section';
import './styling/body-section.css';
import Campus from './components/Campus';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route  path="/"  element={<BodySec/>}/>
        {/* <Route path="/bodysec" element={<BodySec/>}/> */}
        <Route path ="Campus" element={<Campus/>}/>

        
      </Routes>
    </BrowserRouter>



    
     </>
  );
}

export default App;
