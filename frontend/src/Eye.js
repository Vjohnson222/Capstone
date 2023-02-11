
import React from 'react';
import seven from "./seven.png";


// Okay so it's not the eye but save it for who knows what ☺
const Eye = () => {

  const h1Style = { 
  display: 'inline-block', 
  fontFamily: 'Great Vibes, cursive',
  textAlign: 'center',
  fontSize: '200px',
  fontWeight: 'bold',
  marginLeft: '120px',
  color: 'white'
  
};

  const divStyle = { display: 'inline-block' };
  return (
    <div className="eyeContainer">
      
      <br /><br /><br /><br />
      <h1 style={h1Style}><p>Dance Flow</p></h1>
      <br />
      <img src={seven} alt="logo" style={{width: "1300px",height: "80px", borderRadius:'10%',marginTop:"-25px", marginLeft: '2px', opacity: "0.9"}}/>

      <div className="eye-outer" style={divStyle}>
        <div className="eye-inner">
          <div className="inner-circle"></div>
        </div>
      </div>
      
    </div>
  );
}

export default Eye;
