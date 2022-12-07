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

  // return (
  //   <div>
  //     {
  //       isLoggedIn === false ? (
  //         <div></div>
  //       ) : (
  //         <div className="sidebar">
  //           <div className="top">
  //             <Link to="/" style={{ textDecoration: "none" }}>
  //               <span className="logo">Attendence Track</span>
  //             </Link>
  //           </div>
  //           <hr />
  //           <div className="center">
  //             <ul>
  //           <p className="title">MAIN</p>
  //           {
  //             role === "admin" ? (
  //                 <>
  //                   <Link to="/" style={{ textDecoration: "none" }}>
  //           <li>
  //             <DashboardIcon className="icon" />
  //             <span>Dashboard</span>
  //           </li>
  //           </Link>
  //                 </>
  //             ) : (
  //               <Link to="/my-incident" style={{ textDecoration: "none" }}>
  //           <li>
  //             <DashboardIcon className="icon" />
  //             <span>Dashboard</span>
  //           </li>
  //           </Link>

  //             )
  //           }
            
  //           {
  //             role === "admin" ? (
  //               <>
  //                <p className="title">Student Management</p>
  //               <Link to="/all-zone" style={{ textDecoration: "none" }}>
  //                 <li>
  //                   <PersonOutlineIcon className="icon" />
  //                   <span>All Student</span>
  //                 </li>
  //               </Link>
  //               <Link to="/create-zone" style={{ textDecoration: "none" }}>
  //                 <li>
  //                   <StoreIcon className="icon" />
  //                   <span>Add Student</span>
  //                 </li>
  //               </Link> 
  //               </>
  //             ) : (
  //               <></>
  //             )
  //           }
           

  //           <p className="title">Attendence Management</p>
  //           <Link to="/create-incident" style={{ textDecoration: "none" }}>
  //           <li>
  //             <SettingsSystemDaydreamOutlinedIcon className="icon" />
  //             <span>All Attendence</span>
  //           </li>
  //           </Link>

  //           <Link to="/my-incident" style={{ textDecoration: "none" }}>
  //           <li>
  //             <SettingsSystemDaydreamOutlinedIcon className="icon" />
  //             <span>Attendence Report</span>
  //           </li>
  //           </Link>
  //           {
  //             role === "admin" ? (
  //               <>
  //                 <Link to="/all-incident" style={{ textDecoration: "none" }}>
  //           <li>
  //             <PsychologyOutlinedIcon className="icon" />
  //             <span>Send Email</span>
  //           </li>
  //           </Link>
  //           <p className="title">Take Attendence</p>
  //           <Link to="/product-classification" style={{ textDecoration: "none" }}>
  //           <li>
  //             <SettingsSystemDaydreamOutlinedIcon className="icon" />
  //             <span>Capture</span>
  //           </li>
  //           </Link>
  //               </>

  //             ) : (
  //                 <></>
  //             )
  //           }
            
            
  //         </ul>

         

  //         <Button variant="contained" onClick={Logout} style={{marginLeft : "auto", marginRight : "auto", marginTop: "10px"}}>Logout</Button>
          
  //       </div>
  //     <div className="bottom">
  //       <div
  //         className="colorOption"
  //         onClick={() => dispatch({ type: "LIGHT" })}
  //       ></div>
  //       <div
  //         className="colorOption"
  //         onClick={() => dispatch({ type: "DARK" })}
  //       ></div>
  //     </div>
  //   </div>
  //       )
  //     }
  //   </div>
    
  // );
  return (
    <div>
     
          <div className="sidebar">
            <div className="top">
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="logo">Attendence Track</span>
              </Link>
            </div>
            <hr />
            <div className="center">
              <ul>
            <p className="title">MAIN</p>
           
             
                  <>
                    <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
            </Link>
                  </>
             
           
           
                <>
                 <p className="title">Student Management</p>
                <Link to="/all-students" style={{ textDecoration: "none" }}>
                  <li>
                    <PersonOutlineIcon className="icon" />
                    <span>All Student</span>
                  </li>
                </Link>
                <Link to="/create-students" style={{ textDecoration: "none" }}>
                  <li>
                    <StoreIcon className="icon" />
                    <span>Add Student</span>
                  </li>
                </Link> 
                </>
             
           

            <p className="title">Attendence Management</p>
            <Link to="/view-attendence" style={{ textDecoration: "none" }}>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>View Attendance</span>
            </li>
            </Link>

            <Link to="/attendance-report" style={{ textDecoration: "none" }}>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>Attendence Report</span>
            </li>
            </Link>
           
                <>
                  <Link to="/send-email" style={{ textDecoration: "none" }}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Send Email</span>
            </li>
            </Link>
            <p className="title">Take Attendence</p>
            <Link to="/take-attendance" style={{ textDecoration: "none" }}>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>Take Attedence</span>
            </li>
            </Link>
                </>

            
            
          </ul>

         

          <Button variant="contained" onClick={Logout} style={{marginLeft : "auto", marginRight : "auto", marginTop: "10px"}}>Logout</Button>
          
        </div>
      <div className="bottom">
        <div
          className="colorOption"
        
        ></div>
        <div
          className="colorOption"
         
        ></div>
      </div>
    </div>
       
    </div>
    
  );
};

export default Sidebar;
