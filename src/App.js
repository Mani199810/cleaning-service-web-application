import React from "react";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Pnf from "./component/Pnf";
import Menu from "./component/Menu";
import About from "./component/About/AboutUs";
import HomeService from "./component/services/HomeService";

export default function App(){
return(

   <Router>
    <Menu/>       
          <Routes>
                <Route path={`/`} element={<Home/>} />
                <Route path={`/about`} element={<About/>} />
                <Route path={`/homeservice`} element={<HomeService/>} />


            </Routes>
   </Router>
 
)

}