import React, { useState } from 'react';
import seven1 from "./seven1.png";
import Videos2 from './Videos2';
import Thumb from './Thumb';
import seven from "./seven.png";


const Videos = () => {
  const [modalDisplay, setModalDisplay] = useState('none');
  const [modalImgSrc, setModalImgSrc] = useState('');

  const handleImageClick = (event) => {
    setModalDisplay('block');
    setModalImgSrc(event.target.src);
  };

  const handleCloseClick = () => {
    setModalDisplay('none');
  };

  return (
    <div className="container">
      <div className="review">
      {/* <Thumb className="thumb" /> */}

        <img src={seven1} className="myImg" style={{ width: "300px", height: "200px" }}  onClick={handleImageClick} />
      
        <Thumb className="thumb" />
        <div id="myModal" className="modal" style={{ display: modalDisplay }}>
      
        <div id="caption">
            <span className="close" style={{ marginLeft: "920px" }}onClick={handleCloseClick}>&times;</span>
          <div className="modal-content close myImg" id="img01">  <Videos2 /> </div>            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
