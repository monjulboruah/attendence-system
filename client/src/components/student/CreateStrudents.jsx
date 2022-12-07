import "./create-students.scss";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Link} from "@mui/material"
import {GlobalState} from "../../GlobalState"


const CreateStudent = () => {

  const state = useContext(GlobalState);
  const [role] = state.role;
  const [isLoggedIn] = state.isLoggedIn;
  



  


  const [studentData, setStudentData] = useState({
   name: "",
   scholarId: "",
   branch: "",
   subject: ""
  });


  return (
    <>
    
        <div className="new">
      
      <div className="newContainer">
       
        <div className="top">
          <h1 style={{color: "black"}}>Add A Student</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Student Name</label>
                <input
                  type="text"
                  placeholder=""
                  
                />
              </div>

              <div className="formInput">
                <label>Scholar Id</label>
                <input type="text" placeholder=""  />
              </div>

              <div className="formInput">
                <label>Branch</label>
                <input
                  type="text"
                  placeholder=""
                  
                />
              </div>

             

              <div className="formInput">
                <label>Subjects Enrolled</label>
                <input
                  type="text"
                  placeholder=""
                 
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    
       
    
    </div>
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <div style={{paddingLeft: "450px"}}>
          <Button variant="contained" style={{marginLeft: "12px"}}>Add Student</Button>
          <Button variant="contained" style={{marginLeft: "12px"}}>Take Images</Button>
          </div>
          
        </div>
      </div>
    </div>
      </>
   
   
  )
};

export default CreateStudent;
