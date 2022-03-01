import React, { useEffect, useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardHeader,
  Typography,
  CardContent,
  Checkbox,
} from "@mui/material";
import axios from "axios";
export default function Flights({ flights, fcheck }) {
  const [follow, setfollow] = useState([]);
  const [check, setcheck] = useState([]);
  function DateConvert(date) {
    const dateCo = new Date(date + "T00:00:00");
    return new Intl.DateTimeFormat("en-GB").format(dateCo);
  }
  useEffect(() => {
    axios
      .post(`http://localhost:1000/checkfollow`, {
        userid: localStorage.userid,
      })
      .then((res) => {setcheck(res.data);
      fcheck(res.data)})
      .catch((e) => console.log(e));
  }, [follow]);

  const like = (fID, uID) => {
    axios
      .post(`http://localhost:1000/follow`, { userid: uID, flightid: fID })
      .then((res) => setfollow(res.data))
      .catch((e) => console.log(e));
  };
 console.log(check)
  return (
    <div className="feed">
      {flights.map((f, i) => (
        <Card key={i} variant="outlined" sx={{ maxWidth: 345 }}>
          <CardHeader
            action={
              <Checkbox
                icon={<FavoriteBorder />}
                onChange={(e) => like(f.id, localStorage.userid)}
                checked={check.some((fl) => fl.flight_id === f.id)}
                checkedIcon={<Favorite />}
              />
            }
            title={f.f_desc}
            subheader={f.destination}
          />
          <CardActionArea>
            <CardMedia component="img" height="140" image={f.img} />
          </CardActionArea>
          <CardContent>
            <Typography variant="h6">
              From: {DateConvert(f.start_date)} - To: {DateConvert(f.end_date)}
            </Typography>
            <Typography variant="h5"> Price : {f.price}$</Typography>
            <Typography variant="body1"> Followers : {f.followers}</Typography>
          </CardContent>
        </Card>
      ))}
      {follow ? console.log(follow) : console.log("no")}
    </div>
  );
}
