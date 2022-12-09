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



    fetch("http://127.0.0.1:5000/upload-test-image", {
      method: "POST",
      headers: {
      'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
      }).then((res) => {
        res.json().then((data)=> {
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
              <h1 style={{color: "black"}}>Capture image of the class for taking attendence</h1>
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
          <div>
            {
               pres.length === 0 ? (<></>) : (<p>{pres}</p>)
            }
          </div>
        </>
       

       
       
      ) : (
        <p>Loading... | Please wait</p>
      )}
    </>
  );
}
