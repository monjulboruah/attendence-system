import React from "react";
import Webcam from "react-webcam";
import { useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SendIcon from "@mui/icons-material/Send";
import { fontFamily } from "@mui/system";

const studentData = [23,29,59];
export default function TakeAttendence() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [pres, setPres] = useState([]);
  const [absent, setAbsent] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const constraints = { video: true };

    async function getMedia() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        webcamRef.current.srcObject = stream;
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    }

    getMedia();
  }, []);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // let form_data = new FormData();
    const img = imgSrc.replace(/^data:image\/(jpg);base64,/, "");
    console.log(img);

    const data = {
      img: img,
    };

    fetch("http://127.0.0.1:5000/upload-test-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      let filteredArray = []
      filteredArray = studentData.filter(element => !data.schId.includes(element))
      setAbsent(filteredArray)
      setLoading(false);
      setPres(data.schId);
      console.log(filteredArray)
    });
  };

  // console.log(imgSrc);
  return (
    <>
      {loading === false ? (
        <>
          <Box
            sx={{ flexGrow: 1 }}
            style={{ margin: "12px", fontFamily: "fantasy" }}
          >
            <Grid container justifyContent="center">
              <Grid item>
                <h1 style={{ color: "black" }}>
                  Capture image for taking attendance
                </h1>
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
                    width: 500,
                  }}
                  screenshotFormat="image/jpeg"
                />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Stack spacing={2} justifyContent="center" direction="row">
              <Button
                variant="contained"
                color="success"
                onClick={capture}
                endIcon={<CameraAltIcon />}
              >
                Capture
              </Button>
              <Button
                variant="contained"
                onClick={onSubmit}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </Stack>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="center">
              <h1 style={{ color: "black" }}>Preview</h1>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1, padding: 5 }}>
            <Grid container justifyContent="center">
              <Grid item>{imgSrc && <img src={imgSrc} />}</Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, padding: 5 }}>
            <Grid container justifyContent="center">
              <Grid item lg={12}>
                <h2>Students Present</h2>
              </Grid>
              <Grid item lg={12}>
                {pres.length !== 0 &&
                  pres.map((schId, idx) => {
                    return (
                      <div id={idx}>
                        <p>{schId}</p>
                        <p>
                          {schId === 23
                            ? "Monjul Boruah"
                            : schId === 29
                            ? "Joysankar Saikia"
                            : schId === 59
                            ? "Surajjyoti Hazarika"
                            : "Unknown"}
                        </p>
                      </div>
                    );
                  })}
              </Grid>
              <Grid item lg={12}>
                <h2>Students Absent</h2>
              </Grid>
              <Grid item lg={12}>
              {absent.length !== 0 &&
                  absent.map((schId, idx) => {
                    return (
                      <div id={idx}>
                        <p>{schId}</p>
                        <p>
                          {schId === 23
                            ? "Monjul Boruah"
                            : schId === 29
                            ? "Joysankar Saikia"
                            : schId === 59
                            ? "Surajjyoti Hazarika"
                            : "Unknown"}
                        </p>
                      </div>
                    );
                  })}
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
