import React, { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

export default function Login({ logdata }) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post("http://localhost:1000/usersinfo", {
        username: localStorage.username,
      })
      .then((res) => logdata(res.data)).catch((e) => console.log(e));
  }, []);
  const loginClick = (username, password) => {
    axios
      .post("http://localhost:1000/login", { username, password })
      .then((res) => setdata(res.data))
      .catch((e) => console.log(e));
  };

  if (localStorage.username && localStorage.role) {
    navigate("/main");
  }
  return (
    <div className="logindiv">
      {localStorage.username || localStorage.role
        ? navigate("/main")
        : console.log("Login Now")}
      {data.username
        ? (localStorage.username = data.username)
        : console.log("err")}
      {data.username ? (localStorage.role = data.role_id) : console.log("err")}
      {data.username ? (localStorage.userid = data.id) : console.log("err")}
      <h1>Login</h1>
      <TextField
        helperText="Please enter your Username"
        id="username"
        label="Username"
        onChange={(e) => setusername(e.target.value)}
      />
      <TextField
        type="password"
        visabillity="true"
        helperText="Please enter your Password"
        id="password"
        label="Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <Button
        variant="outlined"
        endIcon={<LoginIcon />}
        onClick={() => loginClick(username, password)}
      >
        Login
      </Button>
      <Button
        variant="contained"
        endIcon={<LoginIcon />}
        onClick={() => navigate("/register")}
      >
        {" "}
        If You Haven't Registerd Yet Click Here
      </Button>
      {localStorage.username || localStorage.role
        ? navigate("/main")
        : console.log("Login Now")}
    </div>
  );
}
