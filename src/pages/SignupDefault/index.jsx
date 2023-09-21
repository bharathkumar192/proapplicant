import React, { useState, useEffect } from "react";
// import { useGoogleLogin } from "@react-oauth/google";
import { Button, Img, Input, Line, Text } from "components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./index.scss";

const SignupDefaultPage = () => {
  const cookies = new Cookies();
  const baseUrl = process.env.REACT_APP_API_URL;
  const years = [2023, 2024, 2025, 2026, 2027];
  // const googleSignIn = useGoogleLogin({
  //   onSuccess: (res) => {
  //     console.log("res", res);
  //     alert("Login successfull. 😍");
  //   },
  // });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [availableAdmins, setAvailableAdmins] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/available-admins`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAvailableAdmins(data);
      })
      .catch((error) => {
        console.error("Error fetching available admins:", error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Convert value to uppercase if it's the 'Reference' field
    const newValue = name === "Reference" ? value.toUpperCase() : value;

    // Update the appropriate state based on the input field's name

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const [verified, setVerified] = useState(false);

  const [formData, setFormData] = useState({
    cust_name: "",
    email: "",
    password: "",
    Reference: "",
    admin_name: "",
    phnum: "",
    otp: "",
    intake: "spring",
    year: 2023,
  });

  const sendOtp = async () => {
    let response = await fetch(`${baseUrl}/sendOtp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phnum: formData.phnum }),
    })
      .then((data) => data.json())
      .then((data) => data);

    if (response.error) {
      alert(response.error);
    }
  };

  const verifyOtp = async () => {
    let response = await fetch(`${baseUrl}/verifyOtp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phnum: formData.phnum, otp: formData.otp }),
    })
      .then((data) => data.json())
      .then((data) => data);
    if (response.error) {
      alert(response.error);
    } else {
      setVerified(true);
      alert("Verified Successfully");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (verified) {
      if (formData.password !== formData.cPass) {
        alert("Passwords do not match");
      } else {
        try {
          const response = await fetch(`${baseUrl}/add-customer`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          console.log("formdata", formData);
          if (response.ok) {
            alert("Customer added successfully!");
            // Clear the form or navigate to a success page
            let expDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
            console.log(expDate);
            cookies.set("userMail", formData.email, {
              expires: expDate,
            });
            navigate("/");
          } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.error}`);
          }
        } catch (error) {
          console.error("Error adding customer:", error);
        }
      }
    } else {
      alert("Please Verify Otp First");
    }
  };

  return (
    <div className="sign">
      <div className="imgLeft">
        <img src="images/img_group7.svg" alt="" srcset="" />
      </div>
      <div className="rightForm">
        <form action="" onSubmit={handleSubmit}>
          <p className="head">Get your free proapplicants account now!</p>
          <div className="line">
            <div className="vertical-form">
              <p>Name</p>
              <input
                required
                type="text"
                name="cust_name"
                value={formData.cust_name || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="vertical-form">
              <p>Email</p>
              <input
                required
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="line">
            <div className="vertical-form">
              <p>Phone Number</p>
              <input
                disabled={verified}
                required
                type="tel"
                value={formData.phnum || ""}
                onChange={handleInputChange}
                name="phnum"
                id=""
              />
              {formData.phnum.length === 10 ? (
                <a
                  onClick={() => {
                    sendOtp();
                  }}
                >
                  Send Otp
                </a>
              ) : (
                ""
              )}
            </div>
            {formData.phnum.length === 10 ? (
              <div className="vertical-form">
                <p>Otp</p>
                <input
                  disabled={verified}
                  required
                  type="text"
                  maxLength={5}
                  value={formData.otp || ""}
                  onChange={handleInputChange}
                  name="otp"
                  id=""
                />
                {formData.otp.length === 5 ? (
                  <a
                    onClick={() => {
                      verifyOtp();
                    }}
                  >
                    Verify Otp
                  </a>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="line">
            <div className="vertical-form">
              <p>Password</p>
              <input
                required
                type="text"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="vertical-form">
              <p>Confirm Password</p>
              <input
                required
                type="text"
                name="cPass"
                value={formData.cPass}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div
            className="line"
            style={{ justifyContent: "flex-start", gap: "2rem" }}
          >
            <div className="vertical-form">
              <p>Intake</p>
              <select
                name="intake"
                value={formData.intake}
                onChange={handleInputChange}
                id=""
              >
                <option value="summer">Summer</option>
                <option value="fall">Fall</option>
                <option value="spring">Spring</option>
                <option value="winter">winter</option>
              </select>
            </div>
            <div className="vertical-form">
              <p>Year</p>
              <select
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                id=""
              >
                {years.map((year) => {
                  return <option value={year}>{year}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="line">
            <button type="submit" className="signBtn">
              Sign Up
            </button>
          </div>
          <span>Already Have An Account ?</span>
          <Link to={"/signin"} style={{ margin: "0 1rem" }}>
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupDefaultPage;
