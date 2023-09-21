import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useGoogleLogin } from "@react-oauth/google";
// import Cookies from "js-cookie"; // Import js-cookie
import { Button, CheckBox, Img, Input, Line, Text } from "components";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./index.scss";
import "../SignupDefault/index.scss";

const SigninDefaultPage = () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  // GoogleAuth
  // const googleSignIn = useGoogleLogin({
  //   onSuccess: (res) => {
  //     console.log("res", res);
  //     alert("Login successful. 😍");
  //   },
  // });
  const cookies = new Cookies();
  const navigate = useNavigate();
  // password hide unless user clicks on view
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe((prevRememberMe) => !prevRememberMe);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(email, password);

      if (response.status === 200) {
        if (rememberMe) {
          console.log("saving email and passwords as cookies.");
        }
        let expDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        cookies.set("userMail", email, {
          expires: expDate,
        });
        navigate("/");
        // Login successful
      } else {
        alert(data.error); // Invalid credentials
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <div className="sign login">
        <div className="imgLeft">
          <img src="images/img_workingtime.svg" alt="" />
        </div>
        <div className="rightForm">
          <form action="" onSubmit={handleSubmit}>
            <p className="head">Login</p>
            <p className="subDesc">
              Welcome back! Your session has expired. To continue using our
              tools please login
            </p>
            <div className="line">
              <div className="vertical-form">
                <p>Email</p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id=""
                />
              </div>
            </div>
            <div className="line">
              <div className="vertical-form">
                <p>Password</p>
                <input
                  required
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id=""
                />
              </div>
            </div>
            <div className="line">
              <button type="submit" className="signBtn">
                LOGIN
              </button>
            </div>
            <span>New User ?</span>
            <Link to={"/signup"}>Sign Up</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SigninDefaultPage;
