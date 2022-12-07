import React from "react";
import Webcam from "react-webcam";
import { useState } from "react";
import axios from "axios";
//import { WriteFile } from "./WriteFile";


export default function TakeAttendence() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  

  const [loading, setLoading] = useState(false);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageData = {
      base64Image: imgSrc,
      fileName: "test.jpg",
    };

    let { base64Image, fileName } = imageData;

    try {
      let res = await axios.post(
        "http://localhost:5001/upload/get-dimension",
        {
          base64Image,
          fileName,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
    
      setLoading(false);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(imgSrc);
  return (
    <>
      {loading === false ? (
        <>
          <div className="productClassification">
            <>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
              />
              <button onClick={capture}>Capture photo</button>
              <button onClick={onSubmit}>Send</button>
              {imgSrc && <img src={imgSrc} />}
            </>
          </div>
          {/* <p>Height: {dimension.height}</p>
          <p>Width: {dimension.width}</p>
          <p>Packaging: {packageSize}</p> */}
        </>
      ) : (
        <p>Loading... | Please wait</p>
      )}
    </>
  );
}
