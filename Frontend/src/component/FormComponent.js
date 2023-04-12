import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormComponent.css";
import { registerUser, sendOtpEmail, login } from "../services/user_service";
const FormComponent = () => {
  const [addclass, setaddclass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  let navigate = useNavigate();

  //localStorage.setItem("verifiedUser","false");

  const onLoginIn = (event) => {
    event.preventDefault();
    
    login(loginEmail, loginPassword)
    .then((user) => {
      console.log(user);
      const userJson = JSON.stringify(user);
      localStorage.setItem("user", userJson);
      navigate("/AfterHomePage");
    })
    .catch((err)=>{
      console.log(err);
      navigate("/FormComponent");
    })
  };

  const newSignUp = (event) => {
    event.preventDefault();
    let payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      userName: firstName + "_" + lastName,
      dob: dob,
    };

    sendOtpEmail(email)
      .then((resp) => {
        navigate("/OTP");
      })
      .catch((err) => {
        console.log(err.message);
      });

    registerUser(payload)
      .then((resp) => {
        console.log(resp);
        navigate("/OTP");
      })
      .catch((err) => {
        console.log(err.message);
      });
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     var user = userCredential.user;
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
    //navigate("/OTP");
    setFirstName("");
    setLastName("");
    setEmail("");
    setDob("");
    setPassword("");
  };
  return (
    <div className="outerDiv">
      <div className={`container ${addclass}`} id="container">
        <div className="form-container sign-up-container">
          <form className="form">
            <h1 className="h1">Create Account</h1>
            <input
              className="input"
              type="text"
              placeholder="First Name"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              value={firstName}
            />
            <input
              value={lastName}
              className="input"
              type="text"
              placeholder="Last Name"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
            <input
              value={email}
              className="input"
              type="email"
              placeholder="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              value={password}
              className="input"
              type="password"
              placeholder="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <input
              value={dob}
              className="input"
              type="date"
              placeholder="date of birth"
              onChange={(event) => {
                setDob(event.target.value);
              }}
            />
            <button className="button" type="submit" onClick={newSignUp}>
              Register
            </button>
          </form>
        </div>
        <div className=" form-container sign-in-container">
          <form action="">
            <h1 className="h1">Login</h1>
            <input
              className="input"
              type="email"
              placeholder="email"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <input
              className="input"
              type="password"
              placeholder="password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
            <button
              className="button"
              type="submit"
              onClick={onLoginIn}
            >
              Login
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <button
                className="ghost"
                id="signIn"
                onClick={() => setaddclass("")}
              >
                GO TO LOGIN
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <button
                className="ghost"
                id="signUp"
                onClick={() => setaddclass("right-panel-active")}
              >
                GO TO REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
