import React from "react";
import "../styles/login.css";
import InputControl from "./InputControl";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

  const handleSubmit = () => {
    if (!values.email || !values.pass) {
      setErrMsg("Fill all the fields");
      return;
    }
    setErrMsg("");
    setSubmitBtnDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitBtnDisabled(false);
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
        <h1 className="heading">Login</h1>

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
            Login
          </button>
          <p>
            Already have an account?
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
