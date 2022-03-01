import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UpdateIcon from '@mui/icons-material/Update';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AddIcon from '@mui/icons-material/Add';
import BarChartIcon from '@mui/icons-material/BarChart';
export default function Header() {
  const [logout, setlogout] = useState([]);
  const navigate = useNavigate();
  const logoutHandle = () => {
    axios
      .delete(`http://localhost:1000/logout`)
      .then((res) => {
        setlogout(res.data);
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        localStorage.removeItem('userid');
        console.log(logout)
        navigate('/login');
      })
      .catch((e) => console.log(e));
  };
const  addHandle=()=>{
  navigate('/add')
}
  return (
    <div className="header">
      <iframe title="gif"
        src="https://giphy.com/embed/3oEjHO2DG5ecWNgJgs"
        className="headergif"
      ></iframe>
        {localStorage.role ==="2"?<BarChartIcon fontSize="large" label="Stats" onClick={()=>navigate(`/chart`)}/>:console.log("Hi")}
            {localStorage.role ==="2"?<UpdateIcon fontSize="large" onClick={()=>navigate(`/update`)}/>:console.log("Hi")}
      {localStorage.role ==="2"?<AddIcon fontSize="large" onClick={()=>addHandle()}/>:<h1>Welcome {localStorage.username}</h1>}
      <LogoutOutlinedIcon fontSize="large" onClick={()=>logoutHandle()}/>
    </div>
  );
}
