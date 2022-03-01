import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


export default function Register() {
  const [data, setdata] = useState([]);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const register = (fname, lname, username, password) => {
    axios
      .post(
        "http://localhost:1000/register",
        { fname, lname, username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setdata(res.data);
        navigate("/login");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="logindiv">
      <ArrowBackIcon onClick={() => navigate("/login")} />
      <h1>Register</h1>
      <TextField
        helperText="Please enter your First Name"
        id="fName"
        label="First Name:"
        onChange={(e) => setfName(e.target.value)}
      />
      <TextField
        helperText="Please enter your Last Name"
        id="lName"
        label="Last Name:"
        onChange={(e) => setlName(e.target.value)}
      />
      <TextField
        helperText="Please enter your Username"
        id="username"
        label="Username"
        onChange={(e) => setusername(e.target.value)}
      />
      <TextField
        type={"password"}
        helperText="Please enter your Password"
        id="password"
        label="Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <Button
        variant="contained"
        endIcon={<LoginIcon />}
        onClick={() => {register(fName, lName, username, password);
        console.log(data)}}
      >
        Register
      </Button>
    </div>
  );
}
