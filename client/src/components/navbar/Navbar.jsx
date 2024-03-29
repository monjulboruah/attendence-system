
import "./navbar.scss";
import Drawer from "./Drawer.jsx";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";


import { useContext } from "react";
import { GlobalState } from "../../GlobalState";


const Navbar = () => {
  const state = useContext(GlobalState);
  const [isLoggedIn] = state.isLoggedIn;



  return (
    <div>
     
        <div className="navbar">
        <div className="wrapper">
          {/* <div className="search">
          </div> */}
      
      <div style={{justifyContent:"left"}}><Drawer/></div>

          <div className="items">
            <div className="item">
              <LanguageOutlinedIcon className="icon" />
              English
            </div>
            <div className="item">
              <DarkModeOutlinedIcon
                className="icon"
              />
            </div>
            
            
            
            <div className="item">
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="avatar"
              />
            </div>
          </div>
        </div>
      </div>
      

    </div>
    
  );
};

export default Navbar;
