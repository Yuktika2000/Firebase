import React from "react";
import "../styles/login.css";
import InputControl from "./InputControl";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

  const handleSubmit = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrMsg("Fill all the fields");
      return;
    }
    setErrMsg("");
    setSubmitBtnDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitBtnDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitBtnDisabled(false);
        setErrMsg(err.message);
      });
  };
  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Signup</h1>
        <InputControl
          label="Name"
          placeholder="Enter name"
          className="inputControl"
          onChange={(e) => {
            setValues((prev) => ({ ...prev, name: e.target.value }));
          }}
        />
        <InputControl
          label="Email"
          placeholder="Enter email"
          className="inputControl"
          onChange={(e) => {
            setValues((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          className="inputControl"
          onChange={(e) => {
            setValues((prev) => ({ ...prev, pass: e.target.value }));
          }}
        />

        <div className="footer">
          <b className="err"> {errMsg}</b>
          <button onClick={handleSubmit} disabled={submitBtnDisabled}>
            Signup
          </button>
          <p>
            Already have an account?
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
