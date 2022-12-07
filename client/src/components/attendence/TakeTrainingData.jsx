import React from "react";
import Webcam from "react-webcam";
import { useState } from "react";
import axios from "axios";


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
          <div style={{height: "500px", width: "500px"}}>
            <>
              <Webcam
                audio={false}
                
                ref={webcamRef}
                screenshotFormat="image/jpeg"
              />
              <button onClick={capture}>Capture photo</button>
              <button onClick={onSubmit}>Send</button>
              {
                imgSrc.length !== 0 && imgSrc.map((ele, idx)=> {
                  return <img src={ele} id = {idx}/>
                })
              }
             
            </>
          </div>
        </>
      ) : (
        <p>Loading... | Please wait</p>
      )}
    </>
  );
}
