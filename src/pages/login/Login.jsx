import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios"
import "./login.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try {
        const res = await axios.post("/auth/login", credentials)
        dispatch({type:"LOGIN_SUCCESS", payload:res.data.data})
        navigate("/")
    } catch (err) {
        dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
    }
  }
  return (
    <div className="login">
      <div className="login_container">
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="login_input"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="login_input"
          onChange={handleChange}
        />
        <button disabled={loading} className="login_button" onClick={handleLogin}>Login</button>
        {error && <span className="error_message">{error.message}</span>}
      </div>
    </div>
  );
}


