import "./App.css";
import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
     const [alert, setalert] = useState(null);
     const showAlert = (message, type) => {
          setalert({
               msg: message,
               type: type,
          });
          setTimeout(() => setalert(null), 3000);
     };
     return (
          <>
               <Navbar />
               <Alert alert={alert} />
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
                              element={<SignIn showAlert={showAlert}/>}
                         />
                         <Route
                              path="/signup"
                              element={<SignUp showAlert={showAlert} />}
                         />
                    </Routes>
               </div>
          </>
     );
}

export default App;
