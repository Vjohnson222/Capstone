import React from "react";
import Timer from "./Timer";

const RefreshButton = () => {
  const handleClick = () => {
    window.location.reload(false);
  };

  return (
    <button id="refresh" className="camera--trigger" onClick={handleClick}>
      REFRESH

       </button>
       
  
  );
};

export default RefreshButton;
