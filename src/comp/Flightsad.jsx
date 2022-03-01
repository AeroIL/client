import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardHeader,
    Typography,
    CardContent,
  } from "@mui/material";
import axios from 'axios';
export default function Flightsad({flights,fcheck}) {
  const deleteVac = (flightid) => {
    axios
      .post(`http://localhost:1000/delete`, {flightid})
      .then((res) => {console.log(res.data);
      fcheck(res.data)}).catch((e)=>console.log(e));
  };
    function DateConvert(date) {
        const dateObj = new Date(date + 'T00:00:00');
        return new Intl.DateTimeFormat('en-GB').format(dateObj);
    }
  return (
    <div className='feed'>
        { flights.map((f, i) => (
        <Card key={i} variant="outlined" sx={{ maxWidth: 345 }}>
          <CardHeader
            action={
                <RemoveCircleOutlineIcon onMouseUp={"Remove"} sx={{ fontSize: 30 }} onClick={() => deleteVac(f.id)}/>
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
            <Typography variant='h5'> Price : {f.price}$</Typography>
          </CardContent>
        </Card>
      ))}</div>
  )
}
