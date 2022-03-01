import React, { useState } from "react";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  Button,
  Select,
  MenuItem,
  Typography,
  TextField,
} from "@mui/material/";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Update({ fList }) {
  const [desc, setdesc] = useState("");
  const [dest, setdest] = useState("");
  const [img, setimg] = useState("");
  const [price, setprice] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [selected, setselected] = useState([]);
  const [id, setid] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post(`http://localhost:1000/forupdate`, { id })
      .then((res) => {
        setselected(res.data);
      })
      .catch((e) => console.log(e));
  }, [id]);
  const updatefun = (f_id, fdesc, destination, price, img, startD, endD) => {
    axios
      .post(`http://localhost:1000/update`, {
        f_id,
        fdesc,
        destination,
        price,
        img,
        startD,
        endD,
      })
      .then((res) => {
        console.log(res.data);
     navigate('/main') })
      .catch((e) => console.log(e));
  };

  return (
    <div className="adddiv">
      <ArrowBackIcon onClick={() => navigate("/main")} />
      <div className="addHeader">
        <Typography variant="body2">
          Select From the Options To Update
        </Typography>
        <Select
          defaultValue={"Select"}
          label="Update"
          onChange={(e) => {
            setid(e.target.value);
          }}
        >
          {fList.map((f, i) => (
            <MenuItem key={i} value={f.id}>
              {f.f_desc}
            </MenuItem>
          ))}
          {console.log(id)}
        </Select>
      </div>
{selected.map((f, i) => (
        <div className="update" key={i}>
          <TextField
            id="desc"
            label="Description"
            key={f.f_desc}
            defaultValue={f.f_desc}
            onChange={(e) => setdesc(e.target.value)}
          />

          <TextField
            defaultValue={f.destination}
            key={f.destination}
            id="Destination"
            label="Destination"
            onChange={(e) => setdest(e.target.value)}
          />

          <TextField
          key={f.img}
            defaultValue={f.img}
            id="img"
            label="URL Image"
            onChange={(e) => setimg(e.target.value)}
          />

          <TextField
          key={f.price}
            defaultValue={f.price}
            id="price"
            label="Price:"
            onChange={(e) => setprice(e.target.value)}
          />
          <TextField
          key={f.start_date}
            defaultValue={f.start_date}
            type="date"
            id="start"
            label="From:"
            onChange={(e) => setfrom(e.target.value)}
          />
          <TextField
          key={f.end_date}
            defaultValue={f.end_date}
            type="date"
            id="end"
            label="To:"
            onChange={(e) => setto(e.target.value)}
          />
        </div>
      ))}
      <Button
        variant="outlined"
        onClick={() => updatefun(id, desc, dest, price, img, from, to)}
      >
        Update Flight
      </Button>
    </div>
  );
}
