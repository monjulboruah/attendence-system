import React from "react";
import Webcam from "react-webcam";
import { useState } from "react";
import axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SendIcon from '@mui/icons-material/Send';


const studentData = [
  {
    schId: 23,
    name: "Monjul Boruah"
  },
  {
    schId: 29,
    name: "Joysankar Saikia"
  },
  {
    schId: 59,
    name: "Suraj Jyoti Hazarika"
  }
]
export default function TakeAttendence() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const[pres, setPres] = useState([])
  

  const [loading, setLoading] = useState(false);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const onSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    // let form_data = new FormData();
    const img = imgSrc.replace(/^data:image\/(jpg);base64,/, "") ;
    console.log(img)
    
   const data = {
    img: img
   }



    fetch("http://104.45.148.31:5000/upload-test-image", {
      method: "POST",
      headers: {
      'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
      }).then((res) => {
        res.json().then((data)=> {
          console.log(data)
          setLoading(false)
          setPres(data.schId)
          console.log(data)
        })
      })
      
   
  };

 // console.log(imgSrc);
  return (
    <>
      {loading === false ? (
        <>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent="center">
              <Grid item>
              <h1 style={{color: "black"}}>Capture image of the class for taking attendance</h1>
              </Grid>
          </Grid>
        </Box>
             

          <Box sx={{ flexGrow: 1, padding: 5 }}>
              <Grid container justifyContent="center">
                <Grid item>
                  <Webcam
                  audio={false}
                  ref={webcamRef}
                  forceScreenshotSourceSize
                  videoConstraints={{
                    height: 500,
                    width: 500
                  }}
                  screenshotFormat="image/jpeg"
                  />
                </Grid>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Stack spacing={2} justifyContent="center" direction="row">
              <Button variant="contained" color="success" onClick={capture} endIcon={<CameraAltIcon />}>Capture</Button>
              <Button variant="contained" onClick={onSubmit} endIcon={<SendIcon/>}>Send</Button>
            </Stack>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent="center">
          <h1 style={{color: "black"}}>Preview</h1>
          </Grid>
        </Box>

          <Box sx={{ flexGrow: 1, padding: 5 }}>
              <Grid container justifyContent="center">
                <Grid item>
                  {imgSrc && <img src={imgSrc} />}
                </Grid>
              </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, padding: 5 }}>
            <Grid container justifyContent="center">
              <Grid item lg={12}>
                <h2>Students Present</h2>
              </Grid>
              <Grid item lg={12}>
            {
             pres.length !== 0 && pres.map((schId, idx)=> {
                return(
                  <div id={idx}>
                   <p>{schId}</p>
                   <p>{schId === 23 ? "Monjul Boruah" : schId === 29 ? "Joysankar Saikia" : schId === 59 ?
              "Surajjyoti Hazarika" : "Unknown"}</p>
                  </div>
                )
              })
            }
              </Grid>
            </Grid>
          </Box>
        </>
       

       
       
      ) : (
        <p>Loading... | Please wait</p>
      )}
    </>
  );
}
