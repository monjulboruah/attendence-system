import "./view-attendence.scss";
import axios from "axios"
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {AttendenceData} from "./AttendenceData"



const ViewAttendence = () => {
const [data, setData] = useState();
const [loading, setLoading] = useState(true);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  console.log(data);
  useEffect(()=> {
    setLoading(true);
    setData(AttendenceData)
    // const token = localStorage.getItem("token");
    // axios.get("http://localhost:5001/incident/all-attendence", {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: token,
    //     },
    // }).then((res)=> {
      
      
    //   setData(dta);
    //   setLoading(false);
    // })
  }, [])

  console.log(data);
  const columns = [
     {field: "id", headerName: "ID", width: 135 },
     { field: "studentName", headerName: "Student Name", width: 135 },
    {
      field: "scholarId",
      headerName: "Scholar Id",
      width: 150,
      
    },
  { field: "subject", headerName: "Subject", width: 200 },

    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
           <div className="cellAction">
            <Link to={"/view-attendence/" + params.row._id } style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
          </>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      {
        loading ? <p>Loading... | Please Wait</p>: (
          <>
            <div className="datatableTitle">
                All Incident
                <Link to="/create-students" className="link">
                  Add New
                </Link>
              </div>
              <DataGrid
                className="datagrid"
                rows={data}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
              />
          </>
        )
      }
      
    </div>
  );
};

export default ViewAttendence;
