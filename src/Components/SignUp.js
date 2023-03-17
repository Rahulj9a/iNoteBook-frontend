import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
     const [user, setUser] = useState({
          name: "",
          email: "",
          password: "",
          cpassword: "",
     });
     let navigate = useNavigate();
     const handleSignUp = async (e) => {
          e.preventDefault();
          if (user.password === user.cpassword) {
               const response = await fetch(
                    `http://localhost:5000/api/auth/createuser`,
                    {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json",
                         },
                         body: JSON.stringify({
                              name: user.name,
                              email: user.email,
                              password: user.password,
                         }),
                    },
               );

               const json = await response.json();

               console.log(json);

               if (response.status === 200) {
                    //Save the auth token and redirect
                    console.log(json.authtoken);
                    localStorage.setItem("token", json.authtoken);
                    props.showAlert("Successfully signed up", "success");
                    navigate("/");
               } else {
                    props.showAlert("Invalid Credentials", "danger");
               }
          } else {
               props.showAlert(
                    "Password doesn't match with confirm password",
                    "danger",
               );
          }
          setUser({
               name: "",
               email: "",
               password: "",
               cpassword: "",
          });
     };
     const onChange = (e) => {
          setUser({
               ...user,
               [e.target.name]: e.target.value,
          });
     };
     return (
          <div className="container">
               <form>
                    <div className="form-group">
                         <label htmlFor="name">Name</label>
                         <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              aria-describedby="emailHelp"
                              placeholder="Enter your name"
                              onChange={onChange}
                              value={user.name}
                              required
                         />
                         <label htmlFor="email">Email address</label>
                         <input
                              type="email"
                              className="form-control"
                              id="email"
                              aria-describedby="emailHelp"
                              placeholder="Enter email"
                              name="email"
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
                              placeholder="Password"
                              name="password"
                              onChange={onChange}
                              value={user.password}
                              required
                              minLength={7}
                         />
                    </div>
                    <div className="form-group">
                         <label htmlFor="cPassword">
                              Confirm your Password
                         </label>
                         <input
                              type="password"
                              className="form-control"
                              id="cpassword"
                              placeholder="Re-enter your Password"
                              name="cpassword"
                              onChange={onChange}
                              value={user.cpassword}
                         />
                    </div>

                    <button
                         type="submit"
                         className="btn btn-primary"
                         onClick={handleSignUp}
                         disabled={user.password.length < 7}
                    >
                         Submit
                    </button>
               </form>
          </div>
     );
}
