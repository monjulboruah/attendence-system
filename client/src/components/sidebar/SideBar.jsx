import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {GlobalState} from "../../GlobalState"
import Button from '@mui/material/Button';
// import Drawer from '@mui/material/Drawer';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Sidebar = () => {
  const state = useContext(GlobalState);
  const [role] = state.role;
  const [isLoggedIn] = state.isLoggedIn;
  console.log(isLoggedIn)

  const Logout =(e) => {
    console.log("working")
    localStorage.removeItem("loginStatus")
    localStorage.removeItem("role")    
    localStorage.removeItem("userId")
    localStorage.removeItem("token")
    window.location.href = "/"
  }
           
  return (
    <div>
      <div className="sidebar">


        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">attenD</span>
          </Link>
        </div>

          <hr />
            
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                  <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>
              </Link>
              
            <p className="title">Student Management</p>
              <Link to="/all-students" style={{ textDecoration: "none" }}>
                <li>
                  <PersonOutlineIcon className="icon" />
                    <span>All Student</span>
                </li>
              </Link>
              
              <Link to="/create-student" style={{ textDecoration: "none" }}>
                <li>
                  <StoreIcon className="icon" />
                    <span>Add Student</span>
                </li>
              </Link> 
               
            <p className="title">Attendance Management</p>
              <Link to="/view-attendence" style={{ textDecoration: "none" }}>
                <li>
                  <SettingsSystemDaydreamOutlinedIcon className="icon" />
                  <span>View Attendance</span>
                </li>
              </Link>

              <Link to="/attendance-report" style={{ textDecoration: "none" }}>
                <li>
                  <SettingsSystemDaydreamOutlinedIcon className="icon" />
                  <span>Attendance Report</span>
                </li>
              </Link>
           
           
              <Link to="/send-email" style={{ textDecoration: "none" }}>
                <li>
                  <PsychologyOutlinedIcon className="icon" />
                  <span>Send Email</span>
                </li>
              </Link>
            
            <p className="title">Take Attandence</p>
              <Link to="/take-attendance" style={{ textDecoration: "none" }}>
                <li>
                  <SettingsSystemDaydreamOutlinedIcon className="icon" />
                  <span>Take Attedance</span>
                </li>
              </Link>
          </ul>

        <Button variant="contained" color="warning" endIcon={<PowerSettingsNewIcon/>} onClick={Logout} style={{marginLeft : "auto", marginRight : "auto", marginTop: "10px"}}>Logout</Button>
      </div>
    </div>   
  </div>
  );
};

export default Sidebar;
