import Login from "./comp/Login";
import Register from "./comp/Register";
import Main from "./comp/Main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Addflight from "./comp/Addflight";
import Update from "./comp/Update";
import Chart from "./comp/Chart";
export default function App() {
  const [logged, setlogged] = useState([]);
  const [fList, setfList] = useState([])
  const logdata = (data) => {
    setlogged(data);
  };
  const allList = (all) => {
    setfList(all)
  }


  
  return (
    <div className="all">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to={"/login"}></Navigate>}
          />
          <Route path="/login" element={<Login logdata={logdata} />} />
          <Route path="/main" element={<Main fList={fList} allList={allList}/>} />
          <Route path="/add" element={<Addflight fList={fList}/>} />
          <Route path="/update" element={<Update fList={fList}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/chart" element={<Chart fList={fList} />} />
        </Routes>
      </Router>
    </div>
  );
}
