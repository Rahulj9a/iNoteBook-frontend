import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
 
function App() {
     return (
          <>
               <Navbar />
               <Alert alert="React course" />
               <div className="container">
                    <Routes>
                         <Route
                              path="/"
                              element={<Home />}
                         />
                         <Route
                              path="/about"
                              element={<About />}
                         />
                         <Route
                              path="/signin"
                              element={<SignIn />}
                         />
                         <Route
                              path="/signup"
                              element={<SignUp/>}
                         />
                    </Routes>
               </div>
          </>
     );
}

export default App;
