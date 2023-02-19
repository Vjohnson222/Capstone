import React, { useState } from 'react';
import seven1 from "./seven1.png";
import Videos2 from './Videos2';
import Thumb from './Thumb';
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
    <div >

      
      <div className="review ">
        <img src={seven1} className="myImg " onClick={handleImageClick} />
     <div class="centered">  <button className= "neonBut" onClick={handleImageClick}>ENTER</button></div>

      {/* Sheesh !!!!  so just remove this for now and let it ride the modal */}
        {/* <Thumb className="thumb" /> */}
        <div id="myModal" className="modal" style={{ display: modalDisplay }}>
      
        <div className="modal-content close myImg" id="img01"><Thumb/> </div>     
        <span className="close video"  style={{ marginLeft: "70%", marginTop: "-1%" }}onClick={handleCloseClick}><button className= "neonBut2" > Exit</button>
        </span>

         {/* This is what gets to ride the modal  */}
         {/* <div className="modal-content close myImg" id="img01"> <Videos2/> </div>             */}

          </div>       
        </div>
        
    </div>
  );
};

export default Videos;
