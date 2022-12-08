import React, { useContext } from "react";
import { GlobalState } from "../GlobalState";
import "./allpages.scss";
import { Routes, Route } from "react-router-dom";
import TakeAttendence from "../components/attendence/TakeAttendence"
import TakeTrainingData from "../components/attendence/TakeTrainingData"
import Sidebar from "./sidebar/SideBar";
import Navbar from "./navbar/Navbar";
import ViewAttendence from "./attendence/ViewAttendence"
import AllStudents from "../components/student/AllStudents"
import CreateStudent from "./student/CreateStrudents";
import Dashboard from "./dashboard/Dashboard"


import Loading from "../utils/Loading";




function AllPages() {
  const state = useContext(GlobalState);
  const [isLoggedIn] = state.isLoggedIn;
  const [role] = state.role;
  console.log(isLoggedIn);

  return (
    <>
      <div className="home">
        {/* {isLoggedIn ? <Sidebar /> : <></>} */}
        <Sidebar/>
        <div className="homeContainer">
          {/* {isLoggedIn ? <Navbar /> : <></>} */}
          <Navbar/>
          <div>
            <Routes>
            <Route
                exact
                path="/"
                element={<Dashboard/>}
              />
            <Route
                exact
                path="/take-attendance"
                element={<TakeAttendence/>}
              />
               <Route
                exact
                path="/add-training-data"
                element={<TakeTrainingData/>}
              />
              <Route
                exact
                path="/view-attendence"
                element={<ViewAttendence/>}
              />
              <Route
                exact
                path="/all-students"
                element={<AllStudents/>}
              />
               <Route
                exact
                path="/create-student"
                element={<CreateStudent/>}
              />
             

              <Route path="*" exact component={Loading} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllPages;
