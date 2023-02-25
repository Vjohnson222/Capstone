import React from "react";

const Eye = () => {
 
  const divStyle = { display: "inline-block" };
  return (
    <div className="navbar3">
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <h1 className="h1Style" >
        <p>Dance Flow</p>
      </h1>
      <hr />

      <div className="eye-outer" style={divStyle}>
        <div className="eye-inner">
          <div className="inner-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Eye;
