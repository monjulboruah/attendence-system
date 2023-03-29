import "./dashboard.scss";
import Widget from "../widgets/Widget";
import AllStudents from "../student/AllStudents";
import ViewAttendence from "../attendence/ViewAttendence";
import Grid from '@mui/material/Grid';
const Home = () => {
  return (
    
     
      
      
      <div className="home">
      <div className="homeContainer">
      <div className="widgets" >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs = {12} sm={12} md={4} lg={4}>
          <Widget title="Total Students" /></Grid>
          <Grid item xs = {12} sm={12} md={4} lg={4}>
          <Widget title="Total Present Today" /></Grid>
          <Grid item xs = {12} sm={12} md={4} lg={4}>
          <Widget title="Report" />
          </Grid></Grid>
        </div> 
        <AllStudents/>
        <ViewAttendence/>
        
        
        </div>
        </div>
        
      
   
  );
};

export default Home;