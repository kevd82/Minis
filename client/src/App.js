import React, {useEffect} from "react";
import './App.css';
import axios from "axios";
import AllMinis from "./components/AllMinis";
import OneMini from "./components/OneMini";
import CreateMini from "./components/CreateMini";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {

  

  return (
    <BrowserRouter>    
    <div className="App">
      <Routes>
        <Route element={<AllMinis/>}   path="/" />
        <Route element={<OneMini/>}   path="/mini/:id" />
        <Route element={<CreateMini/>}   path="/create" />





      </Routes>
      
      
    </div>
    </BrowserRouter>

  );
}

export default App;
