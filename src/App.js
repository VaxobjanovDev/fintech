import React from "react";
import "./style/header.css";
import "./style/headerMedia.css";
import './styles/global.css'
import './styles/bootstrap-grid.css'

import { Routes, Route } from "react-router-dom";
import Content from "./Pages/Content";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Pages/search";
import {Footer} from "./Components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
       <Route path={"/"} element={<Search/>}/>
        <Route path="/company/:id" element={<Content />} />
      </Routes>
     <Footer/>
    </>
  );
}

export default App;
