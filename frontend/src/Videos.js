import React, { useState } from 'react';
import seven1 from "./seven1.png";
import Videos2 from './Videos2';
import Thumb from './Thumb';
import seven from "./seven.png";
import Extra from './Extra';


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
      {/* Sheesh !!!!  so just remove this for now and let it ride the modal */}
        {/* <Thumb className="thumb" /> */}
        <div id="myModal" className="modal" style={{ display: modalDisplay }}>
      
        <div className="modal-content close myImg" id="img01"><Thumb/> </div>     
        <span className="close video"  style={{ marginLeft: "920px" }}onClick={handleCloseClick}>&times;</span>
         
         {/* This is what gets to ride the modal  */}
         {/* <div className="modal-content close myImg" id="img01"> <Videos2/> </div>             */}

          </div>       
        </div>
        
    </div>
  );
};

export default Videos;
