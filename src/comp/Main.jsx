import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Flights from "./Flights";
import Flightsad from "./Flightsad";

export default function Main({ allList}) {
  const [flights, setflights] = useState([]);
  const [checked, setchecked] = useState([])
  const fcheck = (state) =>{
    setchecked(state)
  }
  const navigate = useNavigate();
  console.log();
  useEffect(() => {
    axios
      .get("http://localhost:1000/main")
      .then((res) => {
        setflights(res.data);
        allList(res.data);
      })
      .catch((err) => console.log(err));
  }, [checked]);
  console.log(flights);


  return (
    <div className="main">
      {localStorage.username ? console.log("welcome") : navigate("/login")}
      <Header />
      {localStorage.role === "2" ? (
        <Flightsad fcheck={fcheck} flights={flights} />
      ) : (
        <Flights fcheck={fcheck} flights={flights} />
      )}
    </div>
  );
}
