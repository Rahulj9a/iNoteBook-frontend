import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

export default function SignIn(props) {
     const [user, setUser] = useState({ email: "", password: "" });
     let navigate = useNavigate();
     const handleLogin = async (e) => {
          e.preventDefault();
          const response = await fetch(`http://localhost:5000/api/auth/login`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({
                    email: user.email,
                    password: user.password,
               }),
          });

          const json = await response.json();

          console.log(json) 
          
          if (response.status === 200) {
               //Save the auth token and redirect
               console.log(json)
               localStorage.setItem("token", json);
               props.showAlert("Successfully signedin", 'success')
               navigate("/");
          } else {
               props.showAlert('Invalid Credentials', 'danger')
          }
          setUser({
               email: "",
               password: "",
          });
     };
     const onChange = (e) => {
           
          setUser({
               ...user,
               [e.target.name]: e.target.value,
          });
     };
     return (
          <div>
               <form>
                    <div className="form-group">
                         <label htmlFor="email">Email address</label>
                         <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              aria-describedby="emailHelp"
                              placeholder="Enter email"
                              onChange={onChange}
                              value={user.email}
                              required
                         />
                         <small
                              id="emailHelp"
                              className="form-text text-muted"
                         >
                              We'll never share your email with anyone else.
                         </small>
                    </div>
                    <div className="form-group">
                         <label htmlFor="password">Password</label>
                         <input
                              type="password"
                              className="form-control"
                              id="password"
                              name="password"
                              placeholder="Password"
                              onChange={onChange}
                              value={user.password}
                              required
                         />
                    </div>

                    <button
                         type="submit"
                         className="btn btn-primary"
                         disabled={
                              user.password.length<7
                         }
                         onClick={handleLogin}
                    >
                         Submit
                    </button>
               </form>
          </div>
     );
}
