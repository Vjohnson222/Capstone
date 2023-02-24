import React from "react";

const Eye = () => {
  const h1Style = {
    display: "inline-block",
    fontFamily: "Great Vibes, cursive",
    textAlign: "center",
    fontSize: "200px",
    fontWeight: "bold",
    marginLeft: "100px",
    color: "white",
  };

  const divStyle = { display: "inline-block" };
  return (
    <div className="navbar3">
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <h1 style={h1Style}>
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
