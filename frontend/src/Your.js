import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./Timer";
import RefreshButton from "./RefreshButton";

const Your = () => {
  const [count, setCount] = useState(0);
  const [cameraViewSrc, setCameraViewSrc] = useState();

  const arr = [
    "./images/one.jpg",
    "./images/two.jpg",
    "./images/three.jpg",
    "./images/four.jpg",
  ];
  const len = arr.length;

  useEffect(() => {
    // Set constraints for the video stream
    const constraints = { video: { facingMode: "user" }, audio: false };

    // Access the device camera and stream to cameraView
    const cameraStart = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        setCameraViewSrc(stream);
        const videoElement = document.getElementById("camera--view");
        videoElement.srcObject = stream;
      } catch (error) {
        console.error("Oops. Something is broken.", error);
      }
    };
    cameraStart();
  }, []);

  const handleCameraTrigger = () => {
    setTimeout(() => {
      const cameraView = document.getElementById("camera--view");
      const cameraSensor = document.getElementById("camera--sensor");
      const cameraOutput = document.getElementById("camera--output");

      // Set the canvas to the same dimensions as the video
      cameraSensor.width = cameraView.videoWidth;
      cameraSensor.height = cameraView.videoHeight;

      // Draw the video frame to the canvas
      cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);

      // Extract the image data from the canvas
      cameraOutput.src = cameraSensor.toDataURL("image/webp");

      // Set the image data as the src for the output image
      // cameraOutput.setAttribute("src", imageData);
      cameraOutput.classList.add("taken");
    }, 15000);
  };

  const handleLeftClick = () => {
    if (count === 0) {
      setCount(len - 1);
    } else {
      setCount(count - 1);
    }
  };

  const handleRightClick = () => {
    if (count === len - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="column">
          <main id="bob">
            <ul>
              <li>
                <img
                  className="left"
                  src="http://res.cloudinary.com/pixelplus/image/upload/v1510707716/if_arrow-left-01_186410_rznilq.svg"
                />
              </li>
              <li>
                <img
                  className="right"
                  src="http://res.cloudinary.com/pixelplus/image/upload/v1510707716/if_arrow-right-01_186409_dd80gq.svg"
                />
              </li>
            </ul>
            <div className="image image-height">
              <img
                className="images"
                src={require(`${arr[count]}`)}
                alt={`img${count}`}
              />
            </div>
          </main>
        </div>
      </div>
      <div className="row">
        <div className="column2">
          <main id="camera">
            <canvas id="camera--sensor"></canvas>
            <video id="camera--view" autoPlay playsInline></video>
            <img src="#" alt="🏃‍♀️🏃‍♀️🏃‍♀️" id="camera--output" />
            <button id="camera--trigger" onClick={handleCameraTrigger}>
              Take a picture
              <div>
                <Timer />
              </div>
            </button>
          </main>
          <RefreshButton />
        </div>
      </div>
      <div
        className="left"
        style={{ color: "transparent" }}
        onClick={handleLeftClick}
      >
        ←←←
      </div>
      <div
        className="right"
        style={{ color: "transparent" }}
        onClick={handleRightClick}
      >
        →←←
      </div>
    </div>
  );
};
export default Your;
