import React from "react";
import Webcam from "react-webcam";
import { useState } from "react";
import axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { resolveComponentProps } from "@mui/base";

export default function TakeTrainingData() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState([]);


  const [loading, setLoading] = useState(false);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({width: 500, height: 500});
    setImgSrc(prev => [...prev, imageSrc]);

  }, [webcamRef, setImgSrc]);

  console.log(imgSrc)

  const onSubmit = async (e) => {
    const base64Images = [];

    for (let i = 0; i < imgSrc.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(imgSrc[i]);
  
      reader.onload = () => {
        base64Images.push(reader.result);
        if (base64Images.length === imgSrc.length) {
          uploadFiles(base64Images);
        }
      };
    }
  
     // fetch('http://127.0.0.1:5000/upload-train-image'
        
  };

  const uploadFiles = (base64Images) => {
    fetch('http://127.0.0.1:5000/upload-train-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ images: base64Images }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  console.log(imgSrc);
  return (
    <>
      {loading === false ? (
        <>
          <div>
            <>
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
      
          <Box sx={{ flexGrow: 1, padding: 5 }}>
            <Grid container spacing={2}>
            {
              imgSrc.length !== 0 && imgSrc.map((ele, idx)=> {
                return ( <Grid item xs={6}> <img src={ele} id = {idx}/> </Grid>)
              })
            }
            </Grid>
          </Box>
          
           
          </>
          </div>
        </>
      ) : (
        <p>Loading... | Please wait</p>
      )}
    </>
  );
}
