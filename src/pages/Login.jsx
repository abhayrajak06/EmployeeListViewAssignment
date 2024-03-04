import React, { useState } from "react";
import logo from "../assets/Group 3.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const email = "abc@gmail.com";
  const password = "123";
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (userDetails.email === email && userDetails.password === password) {
        toast.success("Login Successfully");
        navigate("/home");
      } else {
        toast.error("Wrong Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="login-page">
      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center items-center mt-20 md:p-8 md:border-4 md:border-double">
          <div>
            <img className="mt-10 mx-auto mb-6" src={logo} alt="Logo" />
            {/* Title Text */}
            <h2 id="text-style" className="text-center mx-auto mb-8">
              #We are Electric
            </h2>
          </div>
          {/* Login Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
            method="POST"
          >
            <div className="text-white">
              {/* Email Input */}
              <div>
                <input
                  name="email"
                  value={userDetails.email}
                  onChange={handleChange}
                  type="email"
                  autoComplete="email"
                  required
                  className="input-style  px-5 py-2 m-3 text-white"
                  placeholder="E-mail"
                />
              </div>
              {/* Password Input */}
              <div>
                <input
                  name="password"
                  value={userDetails.password}
                  onChange={handleChange}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="input-style  px-5 py-2 m-3 text-white"
                  placeholder="Password"
                />
              </div>
            </div>
            {/* Login Button */}
            <div>
              <button
                type="submit"
                id="login-button"
                className="mt-8 p-2 text-white "
              >
                Login
              </button>
            </div>
          </form>
          {/* Forgot Password Link */}
          <div className="mt-6 text-center">
            <Link to={"#"} className="forgot-password ">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
