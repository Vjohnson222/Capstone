import React, { useState } from "react";
import { Link } from "react-router-dom";

import one from "./images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";
import four from "./images/four.jpg";
import five from "./images/five.jpg";
import six from "./images/six.jpg";
import seven from "./images/seven.jpg";
import eight from "./images/eight.jpg";

const Gallery = () => {
  const [angle, setAngle] = useState(0);

  const galleryspin = (sign) => {
    setAngle((prevAngle) => (!sign ? prevAngle + 45 : prevAngle - 45));
  };

  return (
    <div>
    <div style={{ marginLeft: '220px', marginTop: '5px',  marginBottom: '2px',color: 'white', fontSize: '25px' }}>
   Round And Round We Go
    </div>
      
      <p>
        {" "}
        <Link
          to="/Videos"
          className="navbar2"
          style={{
            textDecoration: "none",
            padding: "5px",
            marginTop: "-50px",
            marginLeft: "1080px",
            color: "white",
            fontSize: "18px",
          }}
        >
          {" "}
          Videos
        </Link>{" "}
      </p>
      {/* ---------------------Timer */}
      <p>
        {" "}
        <Link
          to="/Timer"
          className="navbar2"
          style={{
            textDecoration: "none",
            padding: "5px",
            marginTop: "-50px",
            marginLeft: "1080px",
            color: "white",
            fontSize: "18px",
          }}
        >
          {" "}
          Timer
        </Link>{" "}
      </p>
      <ul>
        <li>
          <img
            className="left2"
            src="http://res.cloudinary.com/pixelplus/image/upload/v1510707716/if_arrow-left-01_186410_rznilq.svg"
          />
        </li>
        <li>
          <img
            className="right2"
            src="http://res.cloudinary.com/pixelplus/image/upload/v1510707716/if_arrow-right-01_186409_dd80gq.svg"
          />
        </li>
      </ul>
      <div className="left2" 
        style={{
         
          background: "transparent",
          paddingTop: "20px",
          paddingBottom: "5px",
          height: "25px",
          width: "80px",
          
        }}
      
      onClick={() => galleryspin("")}>
        
      </div>
      <div className="right2" 
        style={{
         
          background: "transparent",
          paddingTop: "20px",
          paddingBottom: "5px",
          height: "25px",
          width: "80px"
        }}
      onClick={() => galleryspin("-")}>
        
      </div>
      <figure
        id="spinner"
        style={{ marginLeft: "110px", transform: `rotateY(${angle}deg)` }}
      >
        <img src={one} alt="" />
        <img src={three} alt="" />
        <img src={eight} alt="" />
        <img src={four} alt="" />
        <img src={five} alt="" />
        <img src={six} alt="" />
        <img src={seven} alt="" />
        <img src={two} alt="" />
      </figure>

      <div id="carousel">

        {/* I silenced the old button and I took the whole party out of this carousel...It's debatable  */}
        {/* <button
          className="prevNext"
          style={{
            background: "transparent",
            marginLeft: "-30px",
            paddingTop: "0px",
            paddingBottom: "5px",
            height: "25px",
            width: "80px",
            borderRadius: "5px",
            border: "solid 1px grey",
          }}
          onClick={() => galleryspin("")}
        >
          <h6> PREV </h6>
        </button> */}

        {/* <button
          className="prevNext"
          style={{
            background: "transparent",
            marginLeft: "1040px",
            paddingTop: "0px",
            paddingBottom: "5px",
            height: "25px",
            width: "80px",
            borderRadius: "5px",
            border: "solid 1px grey",
          }}
          onClick={() => galleryspin("-")}
        >
          <h6> NEXT </h6>
        </button> */}
      </div>

    </div>
  );
};

export default Gallery;
