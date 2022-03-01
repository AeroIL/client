import axios from "axios";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";

export default function Addflight({ fList }) {
  const [desc, setdesc] = useState("");
  const [dest, setdest] = useState("");
  const [img, setimg] = useState("");
  const [price, setprice] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [update, setupdate] = useState("");
  const navigate = useNavigate();
  const add = (fdesc, destination, price, img, startD, endD) => {
    axios
      .post(`http://localhost:1000/add`, {
        fdesc,
        destination,
        price,
        img,
        startD,
        endD,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/main");
      })
      .catch((e) => console.log(e));
  };

  console.log(fList);
  return (
    <div className="adddiv">
      <ArrowBackIcon onClick={() => navigate("/main")} />
<Typography variant="h2">Add Flight Buddy</Typography>
      <TextField
        helperText="Festival Description"
        id="desc"
        label="Description"
        onChange={(e) => setdesc(e.target.value)}
      />
      <TextField
        helperText="Destination"
        id="Destination"
        label="Destination"
        onChange={(e) => setdest(e.target.value)}
      />
      <TextField
        helperText="Only URL with jpg at the end"
        id="img"
        label="Image"
        onChange={(e) => setimg(e.target.value)}
      />
      <TextField
        helperText="Price"
        id="price"
        label="Price:"
        onChange={(e) => setprice(e.target.value)}
      />
      <TextField
        type="date"
        helperText="From"
        id="start"
        
        onChange={(e) => setfrom(e.target.value)}
      />
      <TextField
        type="date"
        helperText="To"
        id="end"
  
        onChange={(e) => setto(e.target.value)}
      />
      <Button
        variant="outlined"
        endIcon={<AddIcon />}
        onClick={() => add(desc, dest, img, price, from, to)}
      >
        Add Flight
      </Button>
    </div>
  );
}
