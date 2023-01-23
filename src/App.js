import "./App.css";
import React from "react";
import {
     createBrowserRouter,
     createRoutesFromElements,
     Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
function App() {
     const router = createBrowserRouter(
     createRoutesFromElements(
          <Route
               exact
               path="/"
               element={<Navbar />}
          >
               ,
               <Route
                    index
                    element={Home}
               />
               <Route
                    index
                    element={About}
               />
          </Route>,
     ));
     return (
          <>
               <Navbar />
          </>
     );
}

export default App;
