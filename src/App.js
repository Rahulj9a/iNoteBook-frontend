import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
 import Navbar from "./Components/Navbar";
function App() {
     return (
          <>
               <Navbar/>
               <Routes>
                    <Route
                         path="/"
                         element={<Home />}
                    />
                    <Route
                         path="/about"
                         element={<About />}
                    />
               </Routes>
          </>
     );
}

export default App;
