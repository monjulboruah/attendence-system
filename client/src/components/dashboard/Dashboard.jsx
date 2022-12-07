import "./dashboard.scss";
import Widget from "../widgets/Widget";
import AllStudents from "../student/AllStudents";
import ViewAttendence from "../attendence/ViewAttendence";
const Home = () => {
  return (
    <div className="home">
     
      <div className="homeContainer">

      <div className="widgets">
         
          <Widget title="Total Students" />
          <Widget title="Total Present Today" />
          <Widget title="Report" />
        </div> 
        <AllStudents/>
        <ViewAttendence/>
        
        
      </div>
    </div>
  );
};

export default Home;